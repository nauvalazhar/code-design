// import { sql } from '@vercel/postgres';
// import { drizzle } from 'drizzle-orm/vercel-postgres';

import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

declare global {
  var __db__: ReturnType<typeof drizzle>;
}

let db: ReturnType<typeof drizzle>;
if (process.env.NODE_ENV === 'production') {
  // db = drizzle(sql);
  db = drizzle(postgres(process.env.SUPABASE_URL, { prepare: false }));
} else {
  if (!globalThis.__db__) {
    globalThis.__db__ = drizzle(
      postgres(process.env.SUPABASE_URL, { prepare: false })
    );
  }

  db = globalThis.__db__;
}

export { db };
