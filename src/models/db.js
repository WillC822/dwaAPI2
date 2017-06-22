const Sequelize = require('sequelize');
const logger = require('./tools/logger');

//instantiates sequlize module that allows acces to mysql db
require ('dotenv').config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_SCHEMA,
    port: process.env.DB_PORT,
    pool: {
        max: 5,
        min: 0,
        idle: 10000,
    },
    logging: false,
});

//create datebase and the columns needed
const url = sequelize.define('url', {
  urlID:{
    type:Sequelize.STRING,
  },
  shortUrl:{
    type:Sequelize.STRING,
  },
  testID:{
    type:Sequelize.STRING,
  }

}); //defines tables

//sync db with db.js
  sequelize.sync();
  logger.debug('sequelize db synced.')

exports.sequelize = sequelize;
exports.crudDB = crudDB
