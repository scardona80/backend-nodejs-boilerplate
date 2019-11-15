/** REQUIRED PROD DEPENDENCIES */
const express = require('express');

/** REQUIRED DEV DEPENDENCIES */
const morgan = require('morgan');

/** REQUIRED PROYECT FILES */
const { config } = require('./config/index');
const {
  logErrors,
  wrapErrors,
  errorHandler
} = require('./utils/middlewares/errorHandlers');
const notFoundHandler = require('./utils/middlewares/notFoundHandler');
const dbConnectionValidator = require('./utils/middlewares/sequelizeValidateConnection');

/** INITS */
const app = express();

/** SETS */
app.set('port', config.port || 3005);

/** MIDDLEWARES */
//Morgan instance (Dev)
app.use(morgan('dev'));

//Sequelize database connection validator
app.use(dbConnectionValidator.testConnection());

//Body parser configurations
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Error handler middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

// Catch 404 error
app.use(notFoundHandler);

/** ROUTES */
app.use(`${config.apiVersion}`, require('./routes/index'));

/** START SERVER */
app.listen(app.get('port'), () => {
  console.log(`Listening on port http://localhost:`, app.get('port'));
});
