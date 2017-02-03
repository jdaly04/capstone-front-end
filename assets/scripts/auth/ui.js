'use strict';

const store = require('../store');
const events = require('../crud/events.js');


const success = (data) => {
  console.log(data);
  $('.messages').empty();
};

// const signUpSuccess = (data) => {
//   store.token = data.user.token;
//   $('#signUpModal').modal("hide");
//   $('#sign-up').trigger("reset");
//   $('.messages').text('Signed up! Now sign in!');
// };

const signInSuccess = (data) => {
  store.user = data.user;
  $('#ch-password').show();
  $('#sign-out-button').show();
  $('#sign-in-button').hide();
  // $('#sign-up-button').hide();
  $('#signInModal').modal("hide");
  $('#patch').show();
  $('#new-prod').show();
  $('#create-product').show();
  $('#sign-in').trigger("reset");
  $('#new-prod').on('click', events.onCreateNewButton);
};

const changePasswordSuccess = (data) => {
  $('#changePasswordModal').modal("hide");
  $('#change-password').trigger("reset");
  $('.messages').empty();
  console.log(data);
};

const signOutSuccess = () => {
  $('#sign-in-button').show();
  $('#sign-up-button').show();
  $('#ch-password').hide();
  $('#sign-out-button').hide();
  $('#delete').hide();
  $('#delete-button').hide();
  $('.user-messages').hide();
  $('#new-prod').hide();
  $('#create-product').hide();
};

const failure = (error) => {
  $('.messages').text('Oops, something went wrong. Try again.');
  console.error(error);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  // signUpSuccess,
  changePasswordSuccess,
  signOutSuccess,
};
