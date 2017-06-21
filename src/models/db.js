const Sequelize = require('sequelize');

//instantiates sequlize module that allows acces to mysql db
require ('dotenv').config();
const sequlize = new Sequelize(process.env).DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
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

}); defines table

//sync db with db.js
sequelize.sync();

exports.sequelize = sequelize;
export.url = url;
