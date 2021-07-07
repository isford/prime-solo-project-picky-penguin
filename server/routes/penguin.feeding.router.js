const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


// //GET ALL feedings FROM DB
router.get('/', (req, res) => {
    console.log('req.user is', req.user)
    const queryText = `
    SELECT  "penguin".name, "penguin".id, "penguin".sex, "penguin".band_color, 
    "colony_manager".name AS "colony_name", "daily_data".daily_total_am, 
    "daily_data".calcium, "daily_data".multivitamin, "daily_data".itraconazole,
    "daily_data".id AS "feed_id"
    FROM "penguin"
    JOIN "colony_manager"
    ON "penguin".colony_id = "colony_manager".id
    JOIN "daily_data"
    ON "penguin".id = "daily_data".penguin_id
    WHERE "penguin".user_id = $1;`;
    if (req.isAuthenticated) {
        pool.query(queryText, [req.user.id])
            .then(results => {
                res.send(results.rows)
            }).catch(error => {
                console.log('Error in Feeding GET route', error)
            })
    } else {
        res.sendStatus(403)
    }
});

//Add new feeding to DB
router.post('/', async (req, res) => {
    const connection = await pool.connect();
    try{
        await connection.query('BEGIN')
        for (let i = 0; i < req.body.length; i++){
            const queryText = `INSERT INTO "daily_data" ("penguin_id","user_id", "daily_total_am", "calcium", "multivitamin", "itraconazole")
                        VALUES ($1, $2, $3, $4, $5, $6);`;

            await connection.query(queryText, [req.body[i].penguin_id, req.user.id, req.body[i].daily_total_am, 
                req.body[i].calcium, req.body[i].multivitamin, req.body[i].itraconazole])

        }await connection.query('COMMIT')
        res.sendStatus(201);
    }catch(error){
        await connection.query('ROLLBACK')
        console.log('Error in Feeding Post', error)
        res.sendStatus(500)
    }finally {
        connection.release();
    }
});

// //Delete Feeding in DB
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log(`You've arrived at /api/feeding DELETE`, req.params)
    console.log(`User deleting item is`, req.user)

    const queryText = `DELETE FROM "daily_data" WHERE "id"=$1;`;
    pool.query(queryText, [req.params.id])
        .then(() => res.sendStatus(200))
        .catch((err) => {
            console.log('Error in delete', err)
            res.sendStatus(500)
        });
});

// //Update Feeding in DB
// router.put('/:id', rejectUnauthenticated, (req, res) => {
//     let penguinId = req.params.id;
//     console.log('Penguin Id in router.put is', penguinId)

//     let updatedPenguin = req.body;
//     console.log('The updated penguin is', updatedPenguin);

//     let queryText = `UPDATE "penguin" SET "name" = $1,
//                     "colony_id" = $2,
//                     "sex"= $3,
//                     "band_color"= $4
//                     WHERE "penguin".id = $5`
//     pool.query(queryText, [updatedPenguin.name, updatedPenguin.colony_id,
//     updatedPenguin.sex, updatedPenguin.band_color, penguinId])
//         .then(response => {
//             console.log(response.rowCount);
//             res.sendStatus(202)
//         }).catch(err => {
//             console.log(err);
//             res.sendStatus(500);
//         });
// });

module.exports = router;
