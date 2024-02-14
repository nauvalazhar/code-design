import { integer, pgTable, serial, unique } from 'drizzle-orm/pg-core';
import { submissions } from 'schemas/submissions';
import { techs } from 'schemas/techs';
import z from 'zod';

export const submissionTechs = pgTable(
  'submission_techs',
  {
    // the internet convinced me to add an id column for the sake of consistency and performance
    id: serial('id').primaryKey(),
    submissionId: integer('submission_id').references(() => submissions.id),
    techId: integer('tech_id').references(() => techs.id),
  },
  (table) => ({
    submissionTech: unique().on(table.submissionId, table.techId),
  })
);

export type SubmissionTech = typeof submissionTechs.$inferSelect;
export type NewSubmissionTech = typeof submissionTechs.$inferInsert;
export const techIdsSchema = z.object({
  techs: z
    .string()
    .min(1, {
      message: 'At least one tech is required',
    })
    .transform((val) => val.split(',').map(Number))
    .pipe(z.number().array()),
});

export type TechIds = z.infer<typeof techIdsSchema>;
