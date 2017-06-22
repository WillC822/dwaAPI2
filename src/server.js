const express = require('express');
const bodyParser = require('body-parser');
const debug = require('debug');
const app = express();
const dotenv = require('dotenv').config();
const logger = require('./tools/logger');


//config port
const port = process.env.DB_PORT || 3000;

//debug
debugWarn = debug('warn');
debugError = debug('error');

//connect body parser to Express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true,
}));

//attaching routes
// app.use('/', (req, res) => {
//   res.json({healthy: 'true'})
//   console.log('home test route works')
// });

//Attaching routes
app.use('/api/v1', require('../routes/api.js')(express));
app.use('/api/v2', require('../routes/apiD.js')(express));

//sets up server, console logs port
const server = app.listen(port, () => {
  console.log('Server active on', + port);
});

logger.debug("Enviromental Debugger set to " + process.env.DEBUG);

module.exports = app;
module.exports = server;
