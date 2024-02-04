import { SQL, count, eq, sql } from 'drizzle-orm';
import { db } from 'lib/db';
import { Category, categories } from 'schemas/categories';
import { challengeDesigners } from 'schemas/challenge_designers';
import { Challenge, challenges } from 'schemas/challenges';
import { Difficulty, difficulties } from 'schemas/difficulties';
import { UserLink, userLinks } from 'schemas/user_links';
import { User, users } from 'schemas/users';

type UserWithLinks = User & {
  links: UserLink[];
};

export type JoinedChallenge = Challenge & {
  difficulty: Difficulty['name'];
  category: Category['name'];
  designers?: UserWithLinks[];
};

export type GetChallengesParams = {
  limit?: number;
  offset?: number;
  where?:
    | {
        search?: string;
        categoryId?: Category['id'];
        difficultyId?: Difficulty['id'];
      }
    | undefined;
};

export type GetChallengesReturn = Promise<{
  challenges: JoinedChallenge[];
  limit: number;
  total: number;
}>;

export async function getChallenges({
  limit = 10,
  offset = 0,
  where,
}: GetChallengesParams = {}): GetChallengesReturn {
  const joinChunks = sql`
    INNER JOIN ${difficulties} ON ${challenges.difficultyId} = ${difficulties.id}
    INNER JOIN ${categories} ON ${challenges.categoryId} = ${categories.id}
  `;

  const fromChunks = sql`FROM ${challenges}`;

  const paginationQuery: SQL[] = [];
  paginationQuery.push(sql`
    SELECT 
      challenges.*, 
      difficulties.name as difficulty,
      categories.name as category
    ${fromChunks}
    ${joinChunks}
  `);

  const countQuery: SQL[] = [];
  countQuery.push(sql`
    SELECT COUNT(*) as count
    ${fromChunks}
  `);

  if (where) {
    const whereChunks: SQL[] = [];

    if (where.search) {
      whereChunks.push(
        sql`(${challenges.name} ILIKE ${`%${where.search}%`} OR ${
          challenges.description
        } ILIKE ${`%${where.search}%`})`
      );
    }

    if (where.categoryId) {
      whereChunks.push(sql`${challenges.categoryId} = ${where.categoryId}`);
    }

    if (where.difficultyId) {
      whereChunks.push(sql`${challenges.difficultyId} = ${where.difficultyId}`);
    }

    // build the where clause
    if (whereChunks.length > 0) {
      const whereClause: SQL[] = [];
      whereClause.push(sql`WHERE`);

      for (let i = 0; i < whereChunks.length; i++) {
        // Add AND between each where clause
        if (i > 0) {
          whereClause.push(sql`AND`);
        }
        whereClause.push(whereChunks[i]);
      }

      paginationQuery.push(sql.join(whereClause, sql.raw(' ')));
      countQuery.push(sql.join(whereClause, sql.raw(' ')));
    }
  }

  paginationQuery.push(sql`LIMIT ${limit}`);

  if (offset > 0) {
    paginationQuery.push(sql`OFFSET ${offset}`);
  }

  const query = sql.join(paginationQuery, sql.raw(' '));
  const data = (await db.execute(query)) as JoinedChallenge[];
  const countData = (await db.execute(sql.join(countQuery, sql.raw(' ')))) as {
    count: number;
  }[];

  return {
    challenges: data,
    total: Number(countData[0].count),
    limit,
  };
}

/*
 * Get a single challenge by its slug
 */

export type GetChallengeBySlugParams = {
  slug: Challenge['slug'];
};

export type GetChallengeBySlugReturn = Promise<JoinedChallenge[]>;

export async function getChallengeBySlug({
  slug,
}: GetChallengeBySlugParams): GetChallengeBySlugReturn {
  const query = sql`
    SELECT 
      ${challenges}.*, 
      ${difficulties.name} as difficulty,
      ${categories.name} as category,
      json_agg(
        to_jsonb(${users}) - 'id' || jsonb_build_object('links', links.links)
      ) as designers
    FROM ${challenges}
    -- difficulty and category joins
    INNER JOIN ${difficulties} ON ${challenges.difficultyId} = ${difficulties.id}
    INNER JOIN ${categories} ON ${challenges.categoryId} = ${categories.id}
    -- join the many-to-many challenge_designers table
    INNER JOIN ${challengeDesigners} ON ${challenges.id} = ${challengeDesigners.challengeId}
    INNER JOIN ${users} ON ${challengeDesigners.userId} = ${users.id}
    LEFT JOIN (
      SELECT ${userLinks.userId}, json_agg(${userLinks}.*) as links
      FROM ${userLinks}
      WHERE ${userLinks.name} = 'Figma'
      GROUP BY ${userLinks.userId}
    ) AS links ON ${users.id} = links.user_id
    WHERE ${challenges.slug} = ${slug}
    GROUP BY ${challenges.id}, ${difficulties.name}, ${categories.name}
    LIMIT 1
  `;

  return db.execute(query);
}
