CREATE TABLE IF NOT EXISTS "user_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer,
	"name" varchar,
	"link" text,
	"created_at" integer,
	"updated_at" integer
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_links" ADD CONSTRAINT "user_links_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
