import {
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

export const badgeValues = pgEnum('badge_values', [
  'designer',
  'reviewer',
  'contributor',
]);

export const badges = pgTable('badges', {
  id: serial('id').primaryKey(),
  name: varchar('name').unique(),
  value: badgeValues('value'),
  description: text('description'),
  image: text('image'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at'),
});

export type Badge = typeof badges.$inferSelect;
export type NewBadge = typeof badges.$inferInsert;
