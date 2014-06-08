'use strict';

var cookieParser = require('cookie-parser'),
express = require('express'),
session = require('express-session');

var port = 55995;
var app = express();

app.use(cookieParser());
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}));

app.use(function(req, res, next) {
  var sess = req.session;
  if (sess.views) {
    sess.views++;
    res.setHeader('Content-Type', 'text/html');
    res.write('<p>views: ' + sess.views + '</p>');
    res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>');
    res.end();
  } else {
    sess.views = 1;
    res.end('welcome to the session demo. refresh!');
  }
});

var server = app.listen(port, function() {
  console.log('Listening on port %d', port);
});
