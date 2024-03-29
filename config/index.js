require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
  cors: process.env.CORS,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbDialect: process.env.DB_DIALECT,
  authJwtSecret: process.env.AUTH_JWT_SECRET,
  apiVersion: process.env.API_VERSION
};

module.exports = { config };
