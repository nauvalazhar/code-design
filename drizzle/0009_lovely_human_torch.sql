ALTER TABLE "user_links" ALTER COLUMN "created_at" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "user_links" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "user_links" ALTER COLUMN "updated_at" SET DATA TYPE timestamp;