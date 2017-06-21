var express = require('express');
var bodyparser = require('body-parser');
var app = express();

var port = 3000;

app.use('/', function(req, res){
  res.json({healthy:'true'})
});

app.listen(port, function() {
  console.log('Server active on', port);
});
