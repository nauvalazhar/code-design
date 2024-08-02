import {
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';
import { challenges } from 'schemas/challenges';
import z from 'zod';

export const phaseEnums = [
  'published',
  'submitted',
  'rejected',
  'archived',
] as const;

export const phaseEnum = pgEnum('phase', phaseEnums);

export const visibilityEnum = pgEnum('visibility', [
  'public',
  'private',
  'unlisted',
]);

export const submissions = pgTable('submissions', {
  id: serial('id').primaryKey(),
  challengeId: integer('challenge_id').references(() => challenges.id),
  slug: varchar('slug').unique(),
  description: text('description'),
  repository: text('repository'),
  demo: text('demo'),
  image: text('image'),
  visibility: visibilityEnum('visibility').default('public'),
  phase: phaseEnum('phase').default('submitted'),
  note: text('note'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at'),
});

export type Submission = typeof submissions.$inferSelect;
export type NewSubmission = typeof submissions.$inferInsert;

const MAX_IMAGE_SIZE = 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

export const insertSubmissionSchema = createInsertSchema(submissions, {
  demo: (schema) => schema.demo.url(),
  repository: (schema) => schema.repository.url(),
  phase: z.enum(phaseEnums),
  image: z
    .instanceof(Blob)
    .optional()
    .refine(
      (value: Blob) => {
        return value.size > 0;
      },
      {
        message: 'Image is required',
      }
    )
    .refine((value) => value.size <= MAX_IMAGE_SIZE, {
      message: 'Image size must be less than 1MB',
    })
    .refine((value) => ACCEPTED_IMAGE_TYPES.includes(value.type), {
      message: 'Image type must be jpeg, jpg, png, or webp',
    })
    .or(z.string()),
});
