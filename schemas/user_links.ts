import { users } from './users';
import { integer, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const userLinks = pgTable('user_links', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  name: varchar('name'),
  link: text('link'),
});

export type UserLink = typeof userLinks.$inferSelect;
export type NewUserLink = typeof userLinks.$inferInsert;
