import { eq, sql } from 'drizzle-orm';
import { alias } from 'drizzle-orm/pg-core';
import { db } from 'lib/db';
import { type Badge, badges } from 'schemas/badges';
import { type UserBadge, userBadges } from 'schemas/user_badges';
import { NewUser, User, users } from 'schemas/users';

type JoinedUserById = User & {
  badges: {
    badge: Badge;
    userBadge: UserBadge;
  }[];
};

export async function getUserById(id: User['id']): Promise<JoinedUserById> {
  const userBadgesAlias = alias(userBadges, 'userBadge');
  const badgesAlias = alias(badges, 'badge');

  const [userData] = await db.select().from(users).where(eq(users.id, id));
  const userBadgesData = await db
    .select()
    .from(userBadgesAlias)
    .innerJoin(badgesAlias, eq(userBadgesAlias.badgeId, badgesAlias.id))
    .where(eq(userBadgesAlias.userId, id));

  return {
    ...userData,
    badges: userBadgesData,
  };
}

export async function isUserBadge(badge: Badge['value']) {
  const userBadge = await db
    .select()
    .from(userBadges)
    .innerJoin(badges, eq(userBadges.badgeId, badges.id))
    .where(eq(badges.value, badge));

  return Boolean(userBadge.length);
}

export async function getUserByEmail(email: string): Promise<User[]> {
  return db.select().from(users).where(eq(users.email, email));
}

export async function getUser(id: User['id']): Promise<User[]> {
  return db.select().from(users).where(eq(users.id, id));
}

export async function createUser(user: NewUser): Promise<User[]> {
  return db.insert(users).values(user).returning();
}

export async function getUserByGithubId(
  githubId: User['githubId']
): Promise<User[]> {
  return db.select().from(users).where(eq(users.githubId, githubId));
}

export async function getUserByUsername(
  username: User['username']
): Promise<User[]> {
  return db.select().from(users).where(eq(users.username, username));
}

export async function updateUserById(
  user: NewUser,
  id: User['id']
): Promise<User[]> {
  return db.update(users).set(user).where(eq(users.id, id)).returning();
}

export async function getOrRegisterUser(user: NewUser): Promise<User[]> {
  // if user has already been registered, return the user
  const registeredUser = await getUserByGithubId(user.githubId);

  if (registeredUser.length > 0) {
    return registeredUser;
  }

  // if user exists, but has not been registered, update the user
  const unregisteredUser = await getUserByUsername(user.username);

  if (unregisteredUser.length > 0) {
    return updateUserById(user, unregisteredUser[0].id);
  }

  // if user does not exist, create the user
  return createUser(user);
}

export async function getDesigners(): Promise<User[]> {
  const query = sql`
    SELECT 
      ${users.id},
      ${users.username},
      ${users.name},
      ${users.avatar}
    FROM ${users}
    INNER JOIN ${userBadges} ON ${users.id} = ${userBadges.userId}
    WHERE ${userBadges.badgeId} = 1
  `;

  return db.execute(query);
}
