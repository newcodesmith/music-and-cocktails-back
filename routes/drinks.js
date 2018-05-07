const express = require('express');

const router = express.Router();

const queries = require('../db/drinks-queries');

router.get('/', (req, res) => {
    queries.getAll()
    .then(drinks => {
        res.json(drinks);
    });
});

module.exports = router;