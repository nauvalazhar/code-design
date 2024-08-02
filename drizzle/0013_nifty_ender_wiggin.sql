DO $$ BEGIN
 CREATE TYPE "point_type" AS ENUM('submission', 'review');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "user_points" ADD COLUMN "type" "point_type";