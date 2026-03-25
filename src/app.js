const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const helmet = require('helmet');
const compression = require('compression');

const albumsRoutes = require('./modules/albums/albums.routes');
const drinksRoutes = require('./modules/drinks/drinks.routes');
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');

const app = express();

app.use(helmet());
app.use(compression());
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/albums', albumsRoutes);
app.use('/drinks', drinksRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
