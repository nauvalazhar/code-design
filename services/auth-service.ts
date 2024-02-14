import { getSession } from 'lib/session';
import { cache } from 'react';
import { getUserById } from 'services/user-service';

export async function getAuthId() {
  const session = await getSession();

  return session.userId;
}

export async function isAuth() {
  const session = await getSession();

  return Boolean(session.userId);
}

export const getAuthUser = cache(async () => {
  const id = await getAuthId();

  const user = await getUserById(id);

  return user;
});

export const isUserReviewer = cache(async () => {
  const user = await getAuthUser();

  return user.badges.some((badge) => badge.badge.value === 'reviewer');
});
