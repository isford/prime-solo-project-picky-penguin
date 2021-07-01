const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


// //GET ALL Penguins FROM DB
// router.get('/', (req, res) => {
//     console.log('req.user is', req.user)
//     const queryText = `
//     SELECT  "penguin".name, "penguin".id, "penguin".sex, "penguin".band_color, "colony_manager".name AS "colony_name"
//     FROM "penguin"
//     JOIN "colony_manager"
//     ON "penguin".colony_id = "colony_manager".id
//     WHERE "penguin".user_id = $1;	 ;`;
//     if (req.isAuthenticated) {
//         pool.query(queryText, [req.user.id])
//             .then(results => {
//                 res.send(results.rows)
//             }).catch(error => {
//                 console.log('Error in Penguin GET route', error)
//             })
//     } else {
//         res.sendStatus(403)
//     }
// });

// //Add new penguin to DB
// router.post('/', (req, res) => {
//     const queryText = `INSERT INTO "penguin" ("name","colony_id", "sex", "band_color", "user_id")
//                         VALUES ($1, $2, $3, $4, $5);`;
//     console.log('User adding item is', req.user.id);
//     if (req.isAuthenticated) {
//         pool.query(queryText, [req.body.name, req.body.colony_id, req.body.sex, req.body.band_color, req.user.id])
//             .then(results => {
//                 res.sendStatus(201);
//             }).catch(err => {
//                 console.log('Error in Colony Post', err);
//             })
//     } else {
//         res.sendStatus(403);
//     }

// });

// // //Delete Penguin in DB
// router.delete('/:id', rejectUnauthenticated, (req, res) => {
//     console.log(`You've arrived at /api/penguin DELETE`, req.params)
//     console.log(`User deleting item is`, req.user)

//     const queryText = `DELETE FROM "penguin" WHERE "id"=$1;`;
//     pool.query(queryText, [req.params.id])
//         .then(() => res.sendStatus(200))
//         .catch((err) => {
//             console.log('Error in delete', err)
//             res.sendStatus(500)
//         });
// });

// //Update Penguin in DB
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
