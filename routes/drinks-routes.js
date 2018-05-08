const express = require('express');

const router = express.Router();

const queries = require('../db/drinks-queries');

function isValidId(req, res, next) {
    if (!isNaN(req.params.id)) return next();
    next(new Error('Invalid ID'));
}

function validDrink(drink) {
    const hasDrinkTitle = typeof drink.drink_title == 'string' && drink.drink_title.trim() != '';
    const hasDescription = typeof drink.description == 'string' && drink.description.trim() != '';
    const hasIngredients = typeof drink.ingredients == 'string' && drink.ingredients.trim() != '';
    const hasDirection = typeof drink.direction == 'string' && drink.direction.trim() != '';
    return hasDrinkTitle && hasDescription && hasIngredients && hasDirection;

}

router.get('/', (req, res) => {
    queries.getAll()
        .then(drinks => {
            res.json(drinks);
        });
});

router.get('/:id', isValidId, (req, res, next) => {
    queries.getOne(req.params.id)
        .then(drink => {
            if (drink) {
                res.json(drink);
            } else {
                next();
            }
        });
});

router.post('/', (req, res, next) => {
    if (validDrink(req.body)) {
        queries.create(req.body)
            .then(drinks => {
                res.json(drinks[0]);
            });
    } else {
        next(new Error('Invalid Drink'));
    }
});

router.put('/:id', isValidId, (req, res, next) => {
    if (validDrink(req.body)) {
        queries.update(req.body)
            .then(drinks => {
                res.json(drinks[0]);
            });
    } else {
        next(new Error('Invalid Album'));
    }
});

router.delete('/:id', isValidId, (req, res) => {
    queries.delete(req.params.id)
        .then(() => {
            res.json({
                delete: true
            });
        });
});

module.exports = router;