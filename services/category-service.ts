import { db } from 'lib/db';
import { type Category, categories } from 'schemas/categories';

export async function getCategories(): Promise<Category[]> {
  return db.select().from(categories);
}
