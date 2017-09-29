'use strict';

process.env.APP_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var config = require('./config/environment');

var app = express();
var server = require('http').createServer(app);
require('./routes')(app);

server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

exports = module.exports = app;
