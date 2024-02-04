import { challenges } from './challenges';
import { users } from './users';
import { integer, pgTable, serial, unique } from 'drizzle-orm/pg-core';

export const challengeDesigners = pgTable(
  'challenge_designers',
  {
    id: serial('id').primaryKey(),
    challengeId: integer('challenge_id').references(() => challenges.id),
    userId: integer('user_id').references(() => users.id),
  },
  (table) => ({
    challengeUser: unique().on(table.challengeId, table.userId),
  })
);

export type ChallengeDesigner = typeof challengeDesigners.$inferSelect;
export type NewChallengeDesigner = typeof challengeDesigners.$inferInsert;
