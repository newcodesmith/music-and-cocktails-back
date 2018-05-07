const express = require('express');

const router = express.Router();

const queries = require('../db/albums-queries');

router.get('/', (req, res) => {
    queries.getAll()
    .then(albums => {
        res.json(albums);
    });
});

module.exports = router;