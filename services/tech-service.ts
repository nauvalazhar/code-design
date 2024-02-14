import 'server-only';
import { SQL, ilike, sql } from 'drizzle-orm';
import { db } from 'lib/db';
import { Tech, techs } from 'schemas/techs';

export type GetTechsParams = {
  limit?: number;
  offset?: number;
  where?:
    | {
        search?: string;
      }
    | undefined;
};

export async function getTechs({
  limit = 10,
  offset = 0,
  where,
}: GetTechsParams = {}): Promise<Tech[]> {
  const query: SQL[] = [];

  query.push(sql`SELECT ${techs.id}, ${techs.name} FROM ${techs}`);

  if (where) {
    const whereChunks: SQL[] = [];

    if (where.search) {
      whereChunks.push(ilike(techs.name, `%${where.search}%`));
    }

    if (whereChunks.length > 0) {
      const whereClause: SQL[] = [];
      whereClause.push(sql`WHERE`);

      for (let i = 0; i < whereChunks.length; i++) {
        if (i > 0) {
          whereClause.push(sql`AND`);
        }
        whereClause.push(whereChunks[i]);
      }

      query.push(sql.join(whereClause, sql.raw(' ')));
    }
  }

  query.push(sql`LIMIT ${limit}`);

  if (offset > 0) {
    query.push(sql`OFFSET ${offset}`);
  }

  const finalQuery = sql.join(query, sql.raw(' '));

  return db.execute(finalQuery);
}
