function errorHandler(error, req, res, next) {
  const statusCode = error.status || error.statusCode || 500;

  if (res.headersSent) {
    return next(error);
  }

  return res.status(statusCode).json({
    error: statusCode >= 500 ? 'Internal Server Error' : 'Request Error',
    message: error.message || 'Unexpected error',
  });
}

module.exports = errorHandler;
