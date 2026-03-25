const express = require('express');

const asyncHandler = require('../../middleware/async-handler');
const validate = require('../../middleware/validate');
const controller = require('./drinks.controller');
const { validateDrinkPayload } = require('./drinks.schema');

const router = express.Router();

router.get('/', asyncHandler(controller.listDrinks));
router.get('/:id', asyncHandler(controller.getDrink));
router.post('/', validate(validateDrinkPayload), asyncHandler(controller.createDrink));
router.put(
  '/:id',
  validate(validateDrinkPayload),
  asyncHandler(controller.updateDrink)
);
router.delete('/:id', asyncHandler(controller.deleteDrink));

module.exports = router;
