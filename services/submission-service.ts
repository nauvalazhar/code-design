import 'server-only';

import { createClient } from '@supabase/supabase-js';
import {
  and,
  desc,
  eq,
  getTableColumns,
  isNull,
  notInArray,
  SQL
} from 'drizzle-orm';
import { alias } from 'drizzle-orm/pg-core';
import { db } from 'lib/db';
import { storage } from 'lib/storage';
import { generateUniqueName } from 'lib/utils';
import { Challenge, challenges } from 'schemas/challenges';
import { submissionTechs, TechIds } from 'schemas/submission_techs';
import { SubmissionUser, submissionUsers } from 'schemas/submission_users';
import {
  Submission,
  submissions,
  type NewSubmission
} from 'schemas/submissions';
import { techs, type Tech } from 'schemas/techs';
import { User, users } from 'schemas/users';
import { getAuthId } from 'services/auth-service';
import { getChallengeIdBySlug } from 'services/challenge-service';
import { pointsAddition } from 'services/point_service';

/**
 * Create a new submission
 */

type SubmissionForm = Pick<
  NewSubmission,
  'demo' | 'repository' | 'description'
> & {
  challenge: Challenge['slug'];
  techs: TechIds['techs'];
};

export async function createSubmission({
  challenge,
  techs,
  ...submission
}: SubmissionForm) {
  const challengeId = await getChallengeIdBySlug(challenge);

  const submissionValues: NewSubmission = {
    ...submission,
    slug: generateUniqueName(),
    challengeId
  };
  const userId = await getAuthId();

  try {
    await db.transaction(async trx => {
      const [insertSubmission] = await trx
        .insert(submissions)
        .values(submissionValues)
        .returning();

      await trx.insert(submissionTechs).values(
        techs.map(tech => ({
          submissionId: insertSubmission.id,
          techId: tech
        }))
      );

      await trx.insert(submissionUsers).values({
        submissionId: insertSubmission.id,
        userId,
        job: 'owner'
      });
    });
  } catch (error) {
    console.error('Error creating submission', error);
    throw error;
  }
}

/**
 * Update a submission
 */

type SubmissionUpdateForm = Pick<
  NewSubmission,
  'demo' | 'repository' | 'description' | 'phase' | 'note' | 'id'
> & {
  techs: TechIds['techs'];
  image: Blob | string;
  imageOld?: string;
};

export async function updateSubmission(
  {
    id,
    image,
    techs,
    imageOld,
    phase,
    note,
    ...submission
  }: SubmissionUpdateForm,
  isReview = false
) {
  const reviewerId = await getAuthId();
  let imagePath = typeof image === 'string' ? image : '';

  if (image instanceof Blob) {
    if (imageOld) {
      await deleteImage(imageOld);
    }

    imagePath = await uploadImage(image);
  }

  try {
    await db.transaction(async trx => {
      const submissionUsersOwner = alias(submissionUsers, 'owner');

      const [selectSubmission] = await trx
        .select({
          phase: submissions.phase,
          ownerId: submissionUsersOwner.userId
        })
        .from(submissions)
        .leftJoin(
          submissionUsersOwner,
          and(
            eq(submissions.id, submissionUsersOwner.submissionId),
            eq(submissionUsersOwner.job, 'owner')
          )
        )
        .where(eq(submissions.id, id));

      await trx
        .delete(submissionTechs)
        .where(
          and(
            eq(submissionTechs.submissionId, id),
            notInArray(submissionTechs.techId, techs)
          )
        );

      await trx
        .insert(submissionTechs)
        .values(
          techs.map(tech => ({
            submissionId: id,
            techId: tech
          }))
        )
        .onConflictDoNothing();

      let data = {
        ...(imagePath && { image: imagePath }),
        ...(phase && { phase }),
        ...(note && { note }),
        ...submission
      };

      await trx.update(submissions).set(data).where(eq(submissions.id, id));

      if (isReview) {
        await trx
          .insert(submissionUsers)
          .values({
            submissionId: id,
            userId: reviewerId,
            job: 'reviewer'
          })
          .onConflictDoNothing({
            target: [
              submissionUsers.submissionId,
              submissionUsers.userId,
              submissionUsers.job
            ]
          });

        if (selectSubmission.phase == 'submitted' && phase == 'published') {
          await pointsAddition(selectSubmission.ownerId, 'submission');
          await pointsAddition(reviewerId, 'review');
        }
      }
    });
  } catch (error) {
    console.error('Error updating submission', error);
    throw error;
  }
}

/**
 * Upload image
 */

export async function uploadImage(image: Blob) {
  const fileName = generateUniqueName();
  const fileExt = image.type.split('/')[1];

  const { data, error } = await storage
    .from('codedesign')
    .upload(`submissions/${fileName}.${fileExt}`, image);

  if (error) {
    console.error('Error uploading image', error);
    return null;
  }

  return data.path;
}

/**
 * Delete image
 */

export async function deleteImage(image: string) {
  const { error } = await storage.from('codedesign').remove([image]);

  if (error) {
    console.error('Error deleting image', error);
    throw error;
  }
}

/**
 * Get submissions
 */

type GetSubmissionsResult = Submission & {
  challenge: Challenge;
  user: User;
};

type GetSubmissionsParams = {
  where?: {
    mode?: 'reviewer' | 'owner';
  };
};

export async function getSubmissions({
  where
}: GetSubmissionsParams = {}): Promise<GetSubmissionsResult[]> {
  const userId = await getAuthId();
  const whereClause: SQL[] = [];

  const submissionUsersOwner = alias(submissionUsers, 'owner');
  let query = db
    .select({
      ...getTableColumns(submissions),
      challenge: getTableColumns(challenges),
      user: getTableColumns(users)
    })
    .from(submissions)
    .leftJoin(challenges, eq(submissions.challengeId, challenges.id))
    .leftJoin(
      submissionUsersOwner,
      and(
        eq(submissions.id, submissionUsersOwner.submissionId),
        eq(submissionUsersOwner.job, 'owner')
      )
    )
    .leftJoin(users, eq(submissionUsersOwner.userId, users.id))
    .$dynamic();

  if (where) {
    if (where.mode === 'owner') {
      whereClause.push(eq(submissionUsersOwner.userId, userId));
    } else if (where.mode === 'reviewer') {
      const submissionUsersReviewer = alias(submissionUsers, 'reviewer');

      query = query.leftJoin(
        submissionUsersReviewer,
        and(
          eq(submissions.id, submissionUsersReviewer.submissionId),
          eq(submissionUsersReviewer.job, 'reviewer')
        )
      );

      whereClause.push(isNull(submissionUsersReviewer.userId));
      whereClause.push(eq(submissions.phase, 'submitted'));
    }
  }

  query = query.where(and(...whereClause));

  return query.orderBy(desc(submissions.createdAt));
}

/*
 * Get submission by slug
 */

type GetSubmissionBySlugResult = Submission & {
  techs: Tech[];
  reviewer: SubmissionUser;
};

export async function getSubmissionBySlug(
  slug: Submission['slug']
): Promise<GetSubmissionBySlugResult> {
  const [submissionData] = await db
    .select()
    .from(submissions)
    .where(eq(submissions.slug, slug))
    .groupBy(submissions.id);

  const techsData = await db
    .select({
      ...getTableColumns(techs)
    })
    .from(submissionTechs)
    .innerJoin(techs, eq(submissionTechs.techId, techs.id))
    .where(eq(submissionTechs.submissionId, submissionData.id));

  const [reivewerData] = await db
    .select()
    .from(submissionUsers)
    .where(
      and(
        eq(submissionUsers.submissionId, submissionData.id),
        eq(submissionUsers.job, 'reviewer')
      )
    );

  return {
    ...submissionData,
    techs: techsData,
    reviewer: reivewerData
  };
}
