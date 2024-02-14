import { relations } from 'drizzle-orm';
import {
  pgTable,
  serial,
  varchar,
  text,
  timestamp,
  bigint,
  pgEnum,
  boolean,
} from 'drizzle-orm/pg-core';
import { userBadges } from 'schemas/user_badges';

export const roleEnum = pgEnum('role', ['user', 'admin']);
export const statusEnum = pgEnum('status', ['active', 'blocked']);

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  username: varchar('username').unique(),
  email: varchar('email').unique(),
  name: varchar('name'),
  bio: text('bio'),
  avatar: text('avatar'),
  githubId: bigint('github_id', { mode: 'bigint' }),
  hireable: boolean('hireable'),
  role: roleEnum('role').default('user'),
  refreshToken: text('refresh_token'),
  status: statusEnum('status').default('active'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at'),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
