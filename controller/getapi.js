const express = require('express');
const router = express.Router();
const getapiBl = require('../bl/getapiBl');

router.get('/getapi', (async (req, res) => {
    let response = await getapiBl.getquery(req,res);
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