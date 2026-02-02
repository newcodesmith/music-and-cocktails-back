// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/music-and-cocktails",
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL + "?ssl=true",
  },
};
