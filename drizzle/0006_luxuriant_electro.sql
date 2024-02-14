DO $$ BEGIN
 CREATE TYPE "job" AS ENUM('owner', 'collaborator', 'reviewer');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "submission_users" ADD COLUMN "job" "job";--> statement-breakpoint
ALTER TABLE "submission_users" DROP COLUMN IF EXISTS "role";