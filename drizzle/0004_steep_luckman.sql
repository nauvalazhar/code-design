ALTER TABLE "submissions" ADD COLUMN "challenge_id" integer;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "submissions" ADD CONSTRAINT "submissions_challenge_id_challenges_id_fk" FOREIGN KEY ("challenge_id") REFERENCES "challenges"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
