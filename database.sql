CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "colony_manager" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" VARCHAR(255) NOT NULL,
	"user_id" INT NOT NULL REFERENCES "user");
	
SELECT "colony_manager".name, COUNT(penguin.id)
FROM "colony_manager"
	JOIN "penguin"
	ON "colony_manager".id = "penguin".colony_id
  WHERE "colony_manager".user_id = $1 
  GROUP BY "colony_manager".id;
	
CREATE TABLE "penguin" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"colony_id" INT NOT NULL REFERENCES "colony_manager",
	"sex" varchar(255) NOT NULL,
	"band_color" varchar(255) NOT NULL,
	"user_id" INT NOT NULL REFERENCES "user");
	
ALTER TABLE "penguin"
ADD "fish_count" INT DEFAULT 0;


SELECT "penguin".name, "penguin".id, "penguin".sex, "colony_manager".name AS "colony_name",
ROUND(AVG("daily_data".daily_total_am), 2) AS "average"
FROM "penguin"
JOIN "colony_manager"
ON "penguin".colony_id = "colony_manager".id
JOIN "daily_data"
ON "penguin".id = "daily_data".penguin_id
WHERE "penguin".user_id = 1
GROUP BY "penguin".id, "colony_manager".name;


CREATE TABLE "daily_data" (
	"id" serial PRIMARY KEY NOT NULL,
	"penguin_id" INT NOT NULL REFERENCES "penguin",
	"user_id" INT NOT NULL REFERENCES "user",
	"date" DATE NOT NULL DEFAULT 'today',
	"daily_total_am" int NOT NULL DEFAULT '0',
	"daily_total_pm" int NOT NULL DEFAULT '0',
	"calcium" BOOLEAN NOT NULL DEFAULT 'FALSE',
	"multivitamin" BOOLEAN NOT NULL DEFAULT 'FALSE',
	"needs_itra" BOOLEAN NOT NULL DEFAULT 'FALSE',
	"itraconazole" BOOLEAN NOT NULL DEFAULT 'FALSE',
	"nesting" BOOLEAN NOT NULL DEFAULT 'FALSE',
	"mating" BOOLEAN NOT NULL DEFAULT 'FALSE',
	"notes" varchar(255) DEFAULT NULL);
	
ALTER TABLE "daily_data"
ADD "fish_average" INT DEFAULT 0;
	
SELECT AVG (daily_total_am) FROM "daily_data"
WHERE "daily_data".penguin_id = 10
LIMIT 10;

DROP TABLE "daily_data";

ALTER TABLE "penguin" ADD COLUMN "average_fish" INT DEFAULT 0;

UPDATE "penguin" SET "average_fish" =
AVG (daily_total_am) FROM "daily_data" 
WHERE "daily_data".penguin_id = "penguin".id;
--LIMIT 10
JOIN "penguin" ON "daily_data".penguin_id = "penguin".id;

SELECT * FROM "daily_data";
SELECT* FROM "penguin";

SELECT "penguin".name, "penguin".id, "colony_manager".name AS "colony_name",
    "daily_data".daily_total_am, "daily_data".calcium, "daily_data".multivitamin, "daily_data".itraconazole
FROM "penguin"
JOIN "colony_manager"
ON "penguin".colony_id = "colony_manager".id
JOIN "daily_data"
ON "penguin".id = "daily_data".penguin_id
WHERE "penguin".user_id = 1;

 SELECT "penguin".name, "penguin".id, "penguin".sex, "penguin".band_color,
     "colony_manager".name AS "colony_name","colony_manager".id AS "colony_id",
ROUND (AVG("daily_data".daily_total_am), 2) AS "average"
FROM "penguin"
JOIN "colony_manager"
ON "penguin".colony_id = "colony_manager".id
JOIN "daily_data"
ON "penguin".id = "daily_data".penguin_id
WHERE "penguin".user_id = 1
GROUP BY "penguin".id, "colony_manager".name, "colony_manager".id
;


SELECT "penguin".name, "penguin".id, "penguin".sex, "penguin".band_color,
     "colony_manager".name AS "colony_name","colony_manager".id AS "colony_id",

    COALESCE(ROUND (AVG("daily_data".daily_total_am), 2), 0) AS "average"


    FROM "penguin"
    JOIN "colony_manager"
    ON "penguin".colony_id = "colony_manager".id
    JOIN "daily_data"
    ON "penguin".id = "daily_data".penguin_id
    WHERE "penguin".user_id = 1
    GROUP BY "penguin".id, "colony_manager".name, "colony_manager".id;
    

SELECT 
    "colony_manager".name,
    "colony_manager".id,    
    COALESCE(COUNT(penguin_id), 0) AS count

    
    FROM "colony_manager"
	JOIN "penguin"
	ON "colony_manager".id = "penguin".colony_id
    WHERE "colony_manager".user_id = 1
    GROUP BY "colony_manager".id;
    
    
    
    SELECT  "penguin".name, "penguin".id, 
    "daily_data".daily_total_am, 
    "daily_data".id AS "feed_id", "daily_data".date
    FROM "penguin"
    JOIN "colony_manager"
    ON "penguin".colony_id = "colony_manager".id
    JOIN "daily_data"
    ON "penguin".id = "daily_data".penguin_id
    WHERE "penguin".id = 10
    ORDER BY "date" ASC;
    
    
SELECT CURRENT_TIME;

ALTER TABLE "daily_data"
ALTER COLUMN "date" TYPE TIMESTAMP;

 

