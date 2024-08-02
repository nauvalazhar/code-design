import {
  integer,
  pgEnum,
  pgTable,
  serial,
  timestamp,
  unique
} from 'drizzle-orm/pg-core';
import { submissions } from 'schemas/submissions';
import { users } from 'schemas/users';

// each submission might have multiple collaborators
// for example, a team of developers might submit a project together
// in such a case, the one who submits the project is the owner
// and the others are collaborators
export const jobEnum = pgEnum('job', ['owner', 'collaborator', 'reviewer']);

export const submissionUsers = pgTable(
  'submission_users',
  {
    id: serial('id').primaryKey(),
    submissionId: integer('submission_id').references(() => submissions.id),
    userId: integer('user_id').references(() => users.id),
    job: jobEnum('job'),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at')
  },
  table => ({
    submissionUserJob: unique().on(table.submissionId, table.userId, table.job)
  })
);

export type SubmissionUser = typeof submissionUsers.$inferSelect;
export type NewSubmissionUser = typeof submissionUsers.$inferInsert;
