import dotenv from 'dotenv';
import type { Config } from 'drizzle-kit';

const path =
  process.env.NODE_ENV === 'production'
    ? '.env.production.local'
    : '.env.development.local';

dotenv.config({
  path,
});

export default {
  schema: './schemas',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL || '',
  },
} satisfies Config;
