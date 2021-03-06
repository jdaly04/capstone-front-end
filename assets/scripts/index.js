'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const authEvents = require('./auth/events.js');
const crudEvents = require('./crud/events.js');

$(() => {
  setAPIOrigin(location, config);
  authEvents.addHandlers();
  crudEvents.getAllHandler();
  $('#ch-password').hide();
  $('#sign-out-button').hide();
  $('#new-prod').hide();
  $('#create-product').hide();
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');
