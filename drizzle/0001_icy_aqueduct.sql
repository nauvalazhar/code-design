DO $$ BEGIN
 CREATE TYPE "phase" AS ENUM('published', 'submitted', 'rejected', 'archived');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "visibility" AS ENUM('public', 'private', 'unlisted');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "submission_techs" (
	"id" serial PRIMARY KEY NOT NULL,
	"submission_id" integer,
	"tech_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "submission_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"submission_id" integer,
	"user_id" integer,
	"role" "role",
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "submissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" varchar,
	"description" varchar,
	"repository" text,
	"demo" text,
	"visibility" "visibility" DEFAULT 'public',
	"phase" "phase" DEFAULT 'submitted',
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp,
	CONSTRAINT "submissions_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "techs" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"slug" varchar,
	"description" text,
	"logo" text,
	CONSTRAINT "techs_name_unique" UNIQUE("name"),
	CONSTRAINT "techs_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "submission_techs" ADD CONSTRAINT "submission_techs_submission_id_submissions_id_fk" FOREIGN KEY ("submission_id") REFERENCES "submissions"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "submission_techs" ADD CONSTRAINT "submission_techs_tech_id_techs_id_fk" FOREIGN KEY ("tech_id") REFERENCES "techs"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "submission_users" ADD CONSTRAINT "submission_users_submission_id_submissions_id_fk" FOREIGN KEY ("submission_id") REFERENCES "submissions"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "submission_users" ADD CONSTRAINT "submission_users_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
