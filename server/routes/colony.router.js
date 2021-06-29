const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


/**
 * GET route template
 */

//GET ALL COLONIES FROM DB
router.get('/', (req, res) => {
    // GET route code here
    console.log('req.user is', req.user)
    const queryText = `SELECT * FROM "colony_manager";`;
    if (req.isAuthenticated){
        pool.query(queryText)
        .then(results => {
            res.send(results.rows)
        }).catch(error => {
            console.log('Error in Colony GET route', error)
        })
    }else {
        res.sendStatus(403)
    }
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    // POST route code here
});

module.exports = router;
