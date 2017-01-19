'use strict';

const store = require('../store');


const success = (data) => {
  console.log(data);
  $('.messages').empty();
};

const signUpSuccess = (data) => {
  store.token = data.user.token;
  $('#signUpModal').modal("hide");
  $('#sign-up').trigger("reset");
  $('.messages').text('Signed up! Now sign in!');
};

const signInSuccess = (data) => { //if you have curly braces you can have more than one expression. without, only 1 expression allowed.
  store.user = data.user;
  $('#ch-password').show();
  $('#sign-out-button').show();
  $('#sign-in-button').hide();
  // $('#sign-up-button').hide();
  $('#signInModal').modal("hide");
  $('#patch').show();
  // $('#update').show();
  // $('#updateSubmit').show();
  // $('#delete').hide();
  // $('#delete-button').hide();
  // $('#update-submit').hide();
  // $('#updateLibName').hide();
  // $('#create-form').show();
  // $('#get-products').show();
  // $('.list-of-fundraisers').show();
  // $('.get-all-products').show();
  $('#sign-in').trigger("reset");
  $('.messages').text('Success! You can now create a new product and/or view your current products! Soon, you can add fundraisers to products!(You can still view all the current fundraisers!)');




  //  button for "My Product" should show up. when you click "my product, you should
  // see a table of your saved fundraisers. Then, you should be able to browse all,
  // and update your product by adding a new one, or be able to delete one from your
  // product.
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
  // $('#update-submit').hide();
  // $('#updateLibName').hide();
  // $('#create-form').hide();
  // $('#get-products').hide();
  // $('.get-all-products').hide();
  // $('.get-all-products').empty();
  // $('.list-of-fundraisers').empty();
  // $('.messages').empty();
};

const failure = (error) => {
  $('.messages').text('Oops, something went wrong. Try again.');
  console.error(error);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signUpSuccess,
  changePasswordSuccess,
  signOutSuccess,
};
