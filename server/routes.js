/**
 * This file defines routes for the App.
 */

'use strict';

module.exports = function (app) {
  app.use('/api/users', require('./api/user'));
};
