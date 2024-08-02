import {
  integer,
  pgEnum,
  pgTable,
  serial,
  timestamp
} from 'drizzle-orm/pg-core';
import { users } from 'schemas/users';

export const actionEnums = ['addition', 'deduction'] as const;
export const actionEnum = pgEnum('action', actionEnums);
export const pointTypes = ['submission', 'review'] as const;
export const pointType = pgEnum('point_type', pointTypes);

export const userPoints = pgTable('user_points', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  value: integer('value'),
  action: actionEnum('action'),
  type: pointType('type'),
  createdAt: timestamp('created_at').defaultNow()
});

export type UserPoint = typeof userPoints.$inferSelect;
export type NewUserPoint = typeof userPoints.$inferInsert;
export type PointAction = (typeof actionEnums)[number];
export type PointType = (typeof pointTypes)[number];
