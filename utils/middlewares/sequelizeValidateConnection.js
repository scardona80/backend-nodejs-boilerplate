const sequelizeDatabaseConnection = require('../../configs/sequelizeDatabaseConnection');
const sequelizeValidateConnection = {};

sequelizeValidateConnection.testConnection = () => {
  sequelizeDatabaseConnection
    .authenticate()
    .then(() => {
      console.log(
        'Connection to the database has been established successfully'
      );
    })
    .catch(error => {
      console.log('Unable to connect to the database: ', error);
    });
};

module.exports = sequelizeValidateConnection;
