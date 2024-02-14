'use server';

import { redirect } from 'next/navigation';
import { techIdsSchema } from 'schemas/submission_techs';
import { NewSubmission, insertSubmissionSchema } from 'schemas/submissions';
import { Tech } from 'schemas/techs';
import { isUserReviewer } from 'services/auth-service';
import {
  createSubmission,
  updateSubmission,
} from 'services/submission-service';
import { getTechs } from 'services/tech-service';

export type SubmissionMode = 'create' | 'edit' | 'review';

export async function handleCreateSubmission(
  challenge: string,
  prevState: any,
  formData: FormData
) {
  const demo = formData.get('demo') as string;
  const repository = formData.get('repository') as string;
  const description = formData.get('description') as string;
  const techs = formData.get('techs') as string;

  const parse = insertSubmissionSchema.safeParse({
    demo,
    repository,
    description,
  });

  if (parse.success === false) {
    return {
      success: false,
      error: parse.error.flatten().fieldErrors,
    };
  }

  const parseTechs = techIdsSchema.safeParse({
    techs,
  });

  if (parseTechs.success === false) {
    return {
      success: false,
      error: parseTechs.error.flatten().fieldErrors,
    };
  }

  await createSubmission({
    demo,
    repository,
    description,
    challenge,
    techs: parseTechs.data.techs,
  });

  return {
    success: true,
  };
}

export async function handleUpdateSubmission(
  submissionId: NewSubmission['id'],
  prevState: any,
  formData: FormData
) {
  const demo = formData.get('demo') as string;
  const repository = formData.get('repository') as string;
  const description = formData.get('description') as string;
  const techs = formData.get('techs') as string;
  const image = formData.get('image') as File;
  const phase = formData.get('phase') as NewSubmission['phase'];
  const note = formData.get('note') as string;
  const imageOld = formData.get('image_old') as string;

  const parse = insertSubmissionSchema.safeParse({
    demo,
    repository,
    description,
    image,
    phase,
    note,
  });

  if (parse.success === false) {
    return {
      success: false,
      error: parse.error.flatten().fieldErrors,
    };
  }

  const parseTechs = techIdsSchema.safeParse({
    techs,
  });

  if (parseTechs.success === false) {
    return {
      success: false,
      error: parseTechs.error.flatten().fieldErrors,
    };
  }

  await updateSubmission({
    id: submissionId,
    demo,
    repository,
    description,
    phase,
    note,
    image,
    techs: parseTechs.data.techs,
    imageOld,
  });

  const isReviewer = await isUserReviewer();

  if (isReviewer) {
    redirect('/me/submissions/reviewer');
  }
  redirect('/me/submissions');
}

export async function loadTechs(search): Promise<Tech[]> {
  'use server';

  return getTechs({
    limit: 5,
    where: {
      search,
    },
  });
}
