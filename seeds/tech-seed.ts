import { sql } from 'drizzle-orm';
import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { techs } from 'schemas/techs';
import { techsData } from 'seeds/data/tech-data';

export async function techSeed(db: PostgresJsDatabase) {
  try {
    await db.insert(techs).values(techsData).onConflictDoNothing();
  } catch (error) {
    console.log(error);
  }
}
