CREATE TABLE IF NOT EXISTS "challenges" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"slug" text,
	"description" text,
	"difficulty_id" integer,
	"category_id" integer,
	"image" text,
	"accent" text,
	"accent2" text,
	"figma" text
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "slug_idx" ON "challenges" ("slug");