const repository = require('../src/modules/albums/albums.repository');

module.exports = {
  getAll: repository.getAll,
  getOne: repository.getOne,
  create: repository.create,
  update: repository.update,
  delete: repository.remove,
};