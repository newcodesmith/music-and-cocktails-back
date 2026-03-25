function validateAlbumPayload(album) {
  const hasGenre = typeof album.genre === 'string' && album.genre.trim() !== '';
  const hasArtist = typeof album.artist === 'string' && album.artist.trim() !== '';
  const hasAlbumTitle =
    typeof album.album_title === 'string' && album.album_title.trim() !== '';
  const hasSpotifyAlbumId =
    typeof album.spotify_album_id === 'string' &&
    album.spotify_album_id.trim() !== '';

  if (!hasGenre || !hasArtist || !hasAlbumTitle || !hasSpotifyAlbumId) {
    return {
      valid: false,
      message:
        'genre, artist, album_title, and spotify_album_id are required strings',
    };
  }

  return { valid: true };
}

module.exports = {
  validateAlbumPayload,
};
