import dotenv from 'dotenv';
import type { Config } from 'drizzle-kit';

export default {
  schema: './schemas',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL || '',
  },
} satisfies Config;
