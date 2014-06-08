'use strict';

var cookieParser = require('cookie-parser'),
express = require('express'),
session = require('express-session');

var router = module.exports = express.Router();

router.use(cookieParser());
router.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}));

router.use(function(req, res, next) {
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
