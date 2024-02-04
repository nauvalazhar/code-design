import { eq } from 'drizzle-orm';
import { db } from 'lib/db';
import { NewUser, User, users } from 'schemas/users';

export async function findUserByEmail(email: string): Promise<User[]> {
  return db.select().from(users).where(eq(users.email, email));
}

export async function findUser(id: User['id']): Promise<User[]> {
  return db.select().from(users).where(eq(users.id, id));
}

export async function createUser(user: NewUser): Promise<User[]> {
  return db.insert(users).values(user).returning();
}

export async function findOrCreateUser(
  id: User['id'],
  user: NewUser
): Promise<User[]> {
  const existingUser = await findUser(id);

  if (existingUser.length > 0) {
    return existingUser;
  }

  return createUser(user);
}
