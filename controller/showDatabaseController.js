const express = require('express');
const router = express.Router();
const showDatabaseBl = require('../bl/showDatabaseBl');

router.post('/api/postman_mysql', (async (req, res) => {
    let response = await showDatabaseBl.getdatabase(req,res);
    if (response) {
        if (response.status != 'error') {
            res.status(200).send(response);
        } else {
            res.status(400).send(response);
        }
    } else {
        res.status(400).send({ "status": "error", "message": "Something went wrong..." });
    }
}));

module.exports = router