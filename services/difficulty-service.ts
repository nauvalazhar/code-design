import { db } from 'lib/db';
import { type Difficulty, difficulties } from 'schemas/difficulties';

export async function getDifficulties(): Promise<Difficulty[]> {
  return db.select().from(difficulties);
}
