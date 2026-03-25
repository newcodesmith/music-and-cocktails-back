function validate(schema) {
  return function validateRequest(req, res, next) {
    const result = schema(req.body || {});

    if (!result.valid) {
      const error = new Error(result.message || 'Invalid request payload');
      error.status = 400;
      return next(error);
    }

    return next();
  };
}

module.exports = validate;
