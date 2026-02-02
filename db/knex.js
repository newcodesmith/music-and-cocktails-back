// const environment = process.env.NODE_ENV || "development";
// const config = require("../knexfile");
// const environmentConfig = config[environment];
// const knex = require("knex");
// const connection = knex(environmentConfig);

// module.exports = connection;

const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[environment];
module.exports = require('knex')(config);