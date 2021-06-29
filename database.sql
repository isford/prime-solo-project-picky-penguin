
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

--CREATE TABLE "User" (
--	"id" serial NOT NULL,
--	"username" varchar(255) NOT NULL,
--	"password" varchar(255) NOT NULL,
--	CONSTRAINT "User_pk" PRIMARY KEY ("id")
--) WITH (
--  OIDS=FALSE
--);



CREATE TABLE "colony_manager" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" VARCHAR(255) NOT NULL,
	"user_id" INT NOT NULL REFERENCES "user";



CREATE TABLE "penguin" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"colony_id" serial NOT NULL,
	"sex" varchar(255) NOT NULL,
	"band_color" varchar(255) NOT NULL,
	CONSTRAINT "penguin_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "penguin_mates" (
	"id" serial NOT NULL,
	"male_id" serial NOT NULL,
	"female_id" serial NOT NULL,
	CONSTRAINT "penguin_mates_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "daily_data" (
	"id" serial NOT NULL,
	"penguin_id" int NOT NULL,
	"date" DATE NOT NULL,
	"daily_total_am" int NOT NULL DEFAULT '0',
	"daily_total_pm" int NOT NULL DEFAULT '0',
	"calcium" BOOLEAN NOT NULL DEFAULT 'FALSE',
	"multivitamin" BOOLEAN NOT NULL DEFAULT 'FALSE',
	"needs_itra" BOOLEAN NOT NULL DEFAULT 'FALSE',
	"itraconazole" BOOLEAN NOT NULL DEFAULT 'FALSE',
	"nesting" BOOLEAN NOT NULL DEFAULT 'FALSE',
	"mating" BOOLEAN NOT NULL DEFAULT 'FALSE',
	"notes" varchar(255) NOT NULL,
	CONSTRAINT "daily_data_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "colony_manager" ADD CONSTRAINT "colony_manager" FOREIGN KEY ("user_id") REFERENCES "user"("id");

ALTER TABLE "penguin" ADD CONSTRAINT "penguin_fk0" FOREIGN KEY ("colony_id") REFERENCES "colony_manager"("id");

ALTER TABLE "penguin_mates" ADD CONSTRAINT "penguin_mates_fk0" FOREIGN KEY ("male_id") REFERENCES "penguin"("id");
ALTER TABLE "penguin_mates" ADD CONSTRAINT "penguin_mates_fk1" FOREIGN KEY ("female_id") REFERENCES "penguin"("id");

ALTER TABLE "daily_data" ADD CONSTRAINT "daily_data_fk0" FOREIGN KEY ("penguin_id") REFERENCES "penguin"("id");

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
