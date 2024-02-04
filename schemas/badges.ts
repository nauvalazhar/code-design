import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const badges = pgTable('badges', {
  id: serial('id').primaryKey(),
  name: varchar('name').unique(),
  description: text('description'),
  image: text('image'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at'),
});

export type Badge = typeof badges.$inferSelect;
export type NewBadge = typeof badges.$inferInsert;
