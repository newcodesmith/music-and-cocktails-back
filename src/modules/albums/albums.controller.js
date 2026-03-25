const service = require('./albums.service');

function assertValidId(id) {
  if (Number.isNaN(Number(id))) {
    const error = new Error('Invalid ID');
    error.status = 400;
    throw error;
  }
}

async function listAlbums(req, res) {
  const albums = await service.getAllAlbums();
  res.json(albums);
}

async function getAlbum(req, res, next) {
  assertValidId(req.params.id);

  const album = await service.getAlbumById(req.params.id);

  if (!album) {
    return next();
  }

  return res.json(album);
}

async function createAlbum(req, res) {
  const albums = await service.createAlbum(req.body);
  res.status(201).json(albums[0]);
}

async function updateAlbum(req, res) {
  assertValidId(req.params.id);

  const albums = await service.updateAlbum(req.params.id, req.body);
  res.status(200).json(albums[0]);
}

async function deleteAlbum(req, res) {
  assertValidId(req.params.id);
  await service.deleteAlbum(req.params.id);

  res.json({ deleted: true });
}

module.exports = {
  listAlbums,
  getAlbum,
  createAlbum,
  updateAlbum,
  deleteAlbum,
};
