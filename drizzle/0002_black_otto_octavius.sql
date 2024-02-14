DO $$ BEGIN
 CREATE TYPE "classification" AS ENUM('language', 'framework', 'library', 'database', 'platform', 'service', 'tool', 'os', 'ide');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "environment" AS ENUM('frontend', 'backend', 'fullstack', 'mobile', 'desktop');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "techs" ADD COLUMN "classification" "classification";--> statement-breakpoint
ALTER TABLE "techs" ADD COLUMN "environment" "environment";