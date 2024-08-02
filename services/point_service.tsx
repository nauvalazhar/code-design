import { eq } from 'drizzle-orm';
import { db } from 'lib/db';
import {
  UserPoint,
  userPoints,
  type PointAction,
  type PointType
} from 'schemas/user_points';
import { users } from 'schemas/users';

import 'server-only';

type Points = Record<PointType, UserPoint['value']>;

const points: Points = {
  submission: 50,
  review: 10
};

export async function pointsAddition(userId: number, pointType: PointType) {
  return pointsAction(userId, pointType, 'addition');
}

export async function pointsDeduction(userId: number, pointType: PointType) {
  return pointsAction(userId, pointType, 'deduction');
}

export async function pointsAction(
  userId: number,
  type: PointType,
  action: PointAction
) {
  try {
    await db.transaction(async trx => {
      const value = points[type];
      await trx.insert(userPoints).values({
        value,
        userId,
        action,
        type
      });

      const user = await trx.select().from(users).where(eq(users.id, userId));

      await trx
        .update(users)
        .set({
          points: user[0].points + value
        })
        .where(eq(users.id, userId));
    });
  } catch (error) {
    console.error(error);
  }
}
