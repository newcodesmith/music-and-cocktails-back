const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT || 3300),
  databaseUrl:
    process.env.DATABASE_URL || 'postgres://localhost/music-and-cocktails',
};

module.exports = env;
