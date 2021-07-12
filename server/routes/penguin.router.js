const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


//GET ALL Penguins FROM DB
router.get('/', (req, res) => {
    console.log('req.user is in penguin GET', req.user)
    const queryText = `
    SELECT "penguin".name, 
    "penguin".id, 
    "penguin".sex, 
    "penguin".band_color,
    "colony_manager".name AS "colony_name",
    "colony_manager".id AS "colony_id",

    ROUND (AVG("daily_data".daily_total_am), 2) AS "average"

    FROM "penguin"
    JOIN "colony_manager"
    ON "penguin".colony_id = "colony_manager".id
    JOIN "daily_data"
    ON "penguin".id = "daily_data".penguin_id
    WHERE "penguin".user_id = $1
    GROUP BY "penguin".id, "colony_manager".name, "colony_manager".id;`;
    if (req.isAuthenticated) {
        pool.query(queryText, [req.user.id])
            .then(results => {
                res.send(results.rows)
                //console.log('Get is sending', results.rows)
            }).catch(error => {
                console.log('Error in Penguin GET route', error)
            })
    } else {
        res.sendStatus(403)
    }
});


router.post('/', async (req, res) => {
    const connection = await pool.connect();
    try {
        await connection.query('BEGIN');

        console.log('Data being submitted is',req.body)

        const penguinQueryText = `INSERT INTO "penguin" 
        ("name","colony_id", "sex", "band_color", 
        "user_id") 
        VALUES ($1, $2, $3, $4, $5) RETURNING id;`

        const result = await connection.query
        (penguinQueryText, [req.body.name, 
            req.body.colony_id, req.body.sex, 
            req.body.band_color, req.user.id]);
        console.log('The result is', result.rows)
        const newId = result.rows[0].id;

        console.log('The new ID is', newId)

            const queryText = `INSERT INTO "daily_data" 
            ("penguin_id","user_id", "daily_total_am", 
            "calcium", "multivitamin", "itraconazole")
                        VALUES ($1, $2, $3, $4, $5, $6);`;

            await connection.query(queryText, [newId, 
                req.user.id, 0, false, false, false])
            console.log('IN PENGUIN POST?')

        await connection.query('COMMIT')

        res.sendStatus(201);
    } catch (error) {
        await connection.query('ROLLBACK')
        console.log('Error in Feeding Post', error)
        res.sendStatus(500)
    } finally {
        connection.release();
    }
});

router.delete('/:id', async (req, res) => {
    const connection = await pool.connect();
    try {
        await connection.query('BEGIN');

        const deleteQueryText = `DELETE FROM "daily_data" WHERE "penguin_id"=$1;`;

        await connection.query(deleteQueryText, [req.params.id]);
        //console.log('The result is', result.rows)
        //const newId = result.rows[0].id;

        const queryText = `DELETE FROM "penguin" WHERE "id"=$1;`;

        await connection.query(queryText, [req.params.id])

        await connection.query('COMMIT')

        res.sendStatus(201);
    } catch (error) {
        await connection.query('ROLLBACK')
        console.log('Error in Feeding Post', error)
        res.sendStatus(500)
    } finally {
        connection.release();
    }
});

// //Delete Penguin in DB
// router.delete('/:id', rejectUnauthenticated, async (req, res) => {
//     console.log(`You've arrived at /api/penguin DELETE`, req.params)
//     console.log(`User deleting item is`, req.user)
//     const connection = await pool.connect();

//     //const queryDelete = `DELETE FROM "daily_data" WHERE "penguin_id"=$1;`

//     const queryText = `DELETE FROM "penguin" WHERE "id"=$1;`;
//     pool.query(queryText, [req.params.id])
//         .then(() => res.sendStatus(200))
//         .catch((err) => {
//             console.log('Error in delete', err)
//             res.sendStatus(500)
//         });
// });

//Update Penguin in DB
router.put('/:id', rejectUnauthenticated, (req, res) => {
    let penguinId = req.params.id;
    console.log('Penguin Id in router.put is', penguinId)

    let updatedPenguin = req.body;
    console.log('The updated penguin is', updatedPenguin);

    let queryText = `UPDATE "penguin" SET "name" = $1,
                    "colony_id" = $2,
                    "sex"= $3,
                    "band_color"= $4
                    WHERE "penguin".id = $5`
    pool.query(queryText, [updatedPenguin.name, updatedPenguin.colony_id,
    updatedPenguin.sex, updatedPenguin.band_color, penguinId])
        .then(response => {
            console.log(response.rowCount);
            res.sendStatus(202)
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        });
});

module.exports = router;
