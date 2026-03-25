const express = require('express');

const asyncHandler = require('../../middleware/async-handler');
const validate = require('../../middleware/validate');
const controller = require('./albums.controller');
const { validateAlbumPayload } = require('./albums.schema');

const router = express.Router();

router.get('/', asyncHandler(controller.listAlbums));
router.get('/:id', asyncHandler(controller.getAlbum));
router.post('/', validate(validateAlbumPayload), asyncHandler(controller.createAlbum));
router.put(
  '/:id',
  validate(validateAlbumPayload),
  asyncHandler(controller.updateAlbum)
);
router.delete('/:id', asyncHandler(controller.deleteAlbum));

module.exports = router;
