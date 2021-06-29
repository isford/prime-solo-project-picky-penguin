const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


//GET ALL COLONIES FROM DB
router.get('/', (req, res) => {
    console.log('req.user is', req.user)
    const queryText = `SELECT * FROM "colony_manager" WHERE "colony_manager".user_id = $1 ;`;
    if (req.isAuthenticated){
        pool.query(queryText, [req.user.id])
        .then(results => {
            res.send(results.rows)
        }).catch(error => {
            console.log('Error in Colony GET route', error)
        })
    }else {
        res.sendStatus(403)
    }
});

//Add new colony to DB
router.post('/', (req, res) => {
    const queryText = `INSERT INTO "colony_manager" ("name", "user_id")
                        VALUES ($1, $2);`;
    console.log('User adding item is', req.user.id);
    if (req.isAuthenticated){
        pool.query(queryText, [req.body.name, req.user.id])
        .then(results => {
            res.sendStatus(201);
        }).catch(err => {
            console.log('Error in Colony Post', err);
        })
    }else {
        res.sendStatus(403);
    }

});

//Delete Colony in DB
router.delete('/:id', rejectUnauthenticated, (req,res) =>{
    console.log(`You've arrived at /api/colony DELETE`, req.params)
    console.log(`User deleting item is`, req.user)
    
    const queryText = `DELETE FROM "colony_manager" WHERE "id"=$1;`;
    pool.query(queryText, [req.params.id])
    .then(()=> res.sendStatus(200))
    .catch((err)=> {
        console.log('Error in delete', err)
        res.sendStatus(500)
    });
});

module.exports = router;
