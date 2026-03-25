const repository = require('../src/modules/drinks/drinks.repository');

module.exports = {
  getAll: repository.getAll,
  getOne: repository.getOne,
  create: repository.create,
  update: repository.update,
  delete: repository.remove,
};