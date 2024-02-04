import { pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core';

export const difficulties = pgTable('difficulties', {
  id: serial('id').primaryKey(),
  name: varchar('name').unique(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at'),
});

export type Difficulty = typeof difficulties.$inferSelect;
export type NewDifficulty = typeof difficulties.$inferInsert;
