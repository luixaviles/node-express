'use strict';

var jsonfile = require('jsonfile');
var lodash = require('lodash');
var path = require('path');

var DATABASE = path.resolve('db', 'user.json');

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.deleteUser = deleteUser;

function getUsers(req, res) {
  console.log('Running getUsers');
  jsonfile.readFile(DATABASE, function (err, obj) {
    if (err) {
      res.status(500).send('Internal Server Error');
    }
    res.status(200).json(obj.users);
  });
}

function addUser(req, res) {
  console.log('Running addUser');
}

function deleteUser(req, res) {
  console.log('Running deleteUser');
}
