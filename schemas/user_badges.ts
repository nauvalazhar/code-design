import { badges } from './badges';
import { users } from './users';
import {
  integer,
  pgTable,
  serial,
  timestamp,
  unique,
} from 'drizzle-orm/pg-core';

export const userBadges = pgTable(
  'user_badges',
  {
    id: serial('id').primaryKey(),
    userId: integer('user_id').references(() => users.id),
    badgeId: integer('badge_id').references(() => badges.id),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at'),
  },
  (table) => ({
    userBadge: unique().on(table.userId, table.badgeId),
  })
);

export type UserBadge = typeof userBadges.$inferSelect;
export type NewUserBadge = typeof userBadges.$inferInsert;
