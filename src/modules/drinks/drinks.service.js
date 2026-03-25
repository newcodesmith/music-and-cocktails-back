const repository = require('./drinks.repository');

function getAllDrinks() {
  return repository.getAll();
}

function getDrinkById(id) {
  return repository.getOne(id);
}

function createDrink(payload) {
  return repository.create(payload);
}

function updateDrink(id, payload) {
  return repository.update(id, payload);
}

function deleteDrink(id) {
  return repository.remove(id);
}

module.exports = {
  getAllDrinks,
  getDrinkById,
  createDrink,
  updateDrink,
  deleteDrink,
};
