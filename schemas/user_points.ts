import {
  pgTable,
  serial,
  integer,
  timestamp,
  pgEnum,
} from 'drizzle-orm/pg-core';
import { users } from 'schemas/users';

export const actionEnums = ['addition', 'deduction'] as const;

export const actionEnum = pgEnum('action', actionEnums);

export const userPoints = pgTable('user_points', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  value: integer('value'),
  action: actionEnum('action'),
  createdAt: timestamp('created_at').defaultNow(),
});
