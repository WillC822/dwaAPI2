const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//config port
const port = 3000;

//connect body parser to Express
app.use(bodyParser.json());

//attaching routes
// app.use('/', (req, res) => {
//   res.json({healthy: 'true'})
//   console.log('home test route works')
// });

//Attaching routes
app.use('/api/v1', require('../routes/api.js')(express));

//sets up server, console logs port
const server = app.listen(port, () => {
  console.log('Server active on', + port);
});

module.exports = app;
module.exports = server;
