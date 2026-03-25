const service = require('./drinks.service');

function assertValidId(id) {
  if (Number.isNaN(Number(id))) {
    const error = new Error('Invalid ID');
    error.status = 400;
    throw error;
  }
}

async function listDrinks(req, res) {
  const drinks = await service.getAllDrinks();
  res.json(drinks);
}

async function getDrink(req, res, next) {
  assertValidId(req.params.id);

  const drink = await service.getDrinkById(req.params.id);

  if (!drink) {
    return next();
  }

  return res.json(drink);
}

async function createDrink(req, res) {
  const drinks = await service.createDrink(req.body);
  res.status(201).json(drinks[0]);
}

async function updateDrink(req, res) {
  assertValidId(req.params.id);

  const drinks = await service.updateDrink(req.params.id, req.body);
  res.status(200).json(drinks[0]);
}

async function deleteDrink(req, res) {
  assertValidId(req.params.id);
  await service.deleteDrink(req.params.id);

  res.json({ deleted: true });
}

module.exports = {
  listDrinks,
  getDrink,
  createDrink,
  updateDrink,
  deleteDrink,
};
