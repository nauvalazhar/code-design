ALTER TABLE "submission_users" ADD CONSTRAINT "submission_users_submission_id_user_id_job_unique" UNIQUE("submission_id","user_id","job");