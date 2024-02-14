DO $$ BEGIN
 CREATE TYPE "badge_values" AS ENUM('designer', 'reviewer', 'contributor');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "badges" ADD COLUMN "value" "badge_values";