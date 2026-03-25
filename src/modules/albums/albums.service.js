const repository = require('./albums.repository');

function getAllAlbums() {
  return repository.getAll();
}

function getAlbumById(id) {
  return repository.getOne(id);
}

function createAlbum(payload) {
  return repository.create(payload);
}

function updateAlbum(id, payload) {
  return repository.update(id, payload);
}

function deleteAlbum(id) {
  return repository.remove(id);
}

module.exports = {
  getAllAlbums,
  getAlbumById,
  createAlbum,
  updateAlbum,
  deleteAlbum,
};
