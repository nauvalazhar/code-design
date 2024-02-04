// import { sql } from '@vercel/postgres';
// import { drizzle } from 'drizzle-orm/vercel-postgres';
// import { migrate } from 'drizzle-orm/vercel-postgres/migrator';
import dotenv from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

const path =
  process.env.NODE_ENV === 'production'
    ? '.env.production.local'
    : '.env.development.local';

dotenv.config({
  path,
});

async function dbMigrate() {
  console.log('Migrating database...');
  // const db = drizzle(sql);
  const client = postgres(process.env.SUPABASE_URL, { prepare: false });
  const db = drizzle(client);

  await migrate(db, {
    migrationsFolder: './drizzle',
  });

  client.end();

  console.log('Database migrated');
}

dbMigrate();
