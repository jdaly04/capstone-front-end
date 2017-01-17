'use strict';

const store = require('../store');
//const readData = JSON.parse(data);
const viewAllProductsTemplate = require('../templates/products.handlebars');
// const events = require('./events.js');
// const ui = require('./ui.js');
// const createLibrary = require('../templates/libraries.handlebars');
//const getAllLibraries = require('../templates/allLibraries.handlebars');
//const store = require('../store.js');

const viewAllSuccess = (data) => {
  store.products = data.products;
  $('#product-crud').modal('show');
  console.log("data is", data);
  $('#view-all-products').show().html(viewAllProductsTemplate(data));
};

// const getLibrariesSuccess = (data) => {
//   $('.get-all-libraries').html(getAllLibraries(data));
//   $('#update-submit').show();
//   $('#updateLibName').show();
//   $('#delete').show();
//   $('#delete-button').show();
//   $('.messages').empty();
//   console.log(data);
// };
//
 const createProductSuccess = (data) => {
  console.log(data);
  $('.messages').text('Success! New library created and added to the end of your library list!');
  $('#create-form').trigger('reset');
  $('#create-modal').modal('hide');
  $('.user-messages').text("Product added! Check the list!");
  setTimeout(function(){
  $('.user-messages').empty();
}, 5000);
};
//
// const createFailure = (error) => {
//   console.error(error);
//     $('.messages').text('Oops, something went wrong. Make sure your library is only twenty characters, and that it is a new library name!');
// };
//
const updateProductSuccess = () => {
  $('#updateProduct').trigger("reset");
  $('#update-modal').modal('hide');
  $('.user-messages').text("Product updated! Check the list!");
  setTimeout(function(){
  $('.user-messages').empty();
}, 5000);
};
// //
const updateFailure = (error) => {
  $('.user-messages').text('Oops, something went wrong!');
  console.error(error);
};
//;
const deleteProductSuccess = () => {
  $('.deleteProduct').trigger("reset");
  $('.user-messages').text("Product deleted! Check the list!");
  $('#product-crud').modal('hide');
  setTimeout(function(){
  $('.user-messages').empty();
}, 5000);
};

 const failure = (error) => {
  $('.user-messages').text('Oops, something went wrong. Try again.');
  setTimeout(function(){
  $('.user-messages').empty();
}, 5000);
  console.error(error);
 };

module.exports = {
  viewAllSuccess,
  createProductSuccess,
  updateProductSuccess,
  deleteProductSuccess,
  failure,
  updateFailure,
  // createFailure,
};
