import { pgEnum, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const classificationEnum = pgEnum('classification', [
  'language', // JavaScript, Python, Ruby, etc.
  'framework', // Next, Django, Ruby on Rails, etc.
  'style', // Vanilla, Tailwind, Bootstrap, etc.
  'library', // React, Redux, etc.
  'database', // PostgreSQL, MySQL, MongoDB, etc.
  'platform', // Node.js, .NET, etc.
  'service', // AWS, Azure, etc.
  'tool', // Webpack, Babel, etc.
  'os', // Windows, macOS, Linux, etc.
  'ide', // VSCode, Sublime, etc.
]);

export const environmentEnum = pgEnum('environment', [
  'frontend',
  'backend',
  'fullstack',
  'mobile',
  'desktop',
]);

export const techs = pgTable('techs', {
  id: serial('id').primaryKey(),
  name: varchar('name').unique(),
  slug: varchar('slug').unique(),
  description: text('description'),
  classification: classificationEnum('classification'),
  environment: environmentEnum('environment'),
  logo: text('logo'),
});

export type Tech = typeof techs.$inferSelect;
export type NewTech = typeof techs.$inferInsert;
