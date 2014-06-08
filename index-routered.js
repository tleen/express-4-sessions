'use strict';

var express = require('express')

var app = express();
var port = 55995;


app.use('/counter',require('./router-counter'));

app.use('/', function(req, res){
  res.send('use /counter');
});

var server = app.listen(port, function() {
  console.log('Listening on port %d', port);
});
