const Sequelize = require('sequelize');
const config = require('./index');

let sequelizeDatabaseConnection = new Sequelize(
  config.dbName,
  config.dbUser,
  config.dbPassword,
  {
    host: config.dbHost,
    dialect: config.dbDialect
    //Here can be setted another connection params like the connection number pool - Camilo 11/15/2019
  }
);

module.exports = sequelizeDatabaseConnection;
