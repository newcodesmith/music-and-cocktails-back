const knex = require('knex');
const config = require('../../knexfile');

const environment = process.env.NODE_ENV || 'development';
const environmentConfig = config[environment];

module.exports = knex(environmentConfig);
