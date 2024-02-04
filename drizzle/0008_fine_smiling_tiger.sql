ALTER TABLE "challenges" ADD COLUMN "created_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "challenges" ADD COLUMN "updated_at" timestamp;