DO $$ BEGIN
 ALTER TABLE "challenges" ADD CONSTRAINT "challenges_difficulty_id_difficulties_id_fk" FOREIGN KEY ("difficulty_id") REFERENCES "difficulties"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "challenges" ADD CONSTRAINT "challenges_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
