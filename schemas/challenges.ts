import { categories } from './categories';
import { difficulties } from './difficulties';
import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const challenges = pgTable('challenges', {
  id: serial('id').primaryKey(),
  name: text('name').unique(),
  slug: text('slug').unique(),
  description: text('description'),
  difficultyId: integer('difficulty_id').references(() => difficulties.id),
  categoryId: integer('category_id').references(() => categories.id),
  image: text('image'),
  accent: text('accent'),
  accent2: text('accent2'),
  figma: text('figma'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at'),
});

export type Challenge = typeof challenges.$inferSelect;
export type NewChallenge = typeof challenges.$inferInsert;
