'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');
const store = require('../store.js');
//const gameEvents = require('../gameEvents.js');

const onSignUp = function(event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.failure);
};

const onSignIn = function(event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.failure);
};

const onChangePassword = function(event) {
  event.preventDefault();
  if (store.user) {
  let data = getFormFields(this);
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.failure);
  }
};

const onSignOut = function(event) {
  event.preventDefault();
  if (store.user) {
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure);
    $('#signOutModal').modal("hide");
  }
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('click', onSignOut);
};

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  addHandlers,
};
