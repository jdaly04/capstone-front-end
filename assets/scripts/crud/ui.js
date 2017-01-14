'use strict';

//const store = require('../store');
//const readData = JSON.parse(data);
//const getAllFundraisers = require('../templates/fundraisers.handlebars');
// const createLibrary = require('../templates/libraries.handlebars');
//const getAllLibraries = require('../templates/allLibraries.handlebars');
//const store = require('../store.js');

const viewAllSuccess = (data) => {
  // $('.list-of-fundraisers').html(getAllFundraisers(data));
  $('#product-crud').modal('show');
  console.log("data is", data);

  // Need to add button for user to add fundraiser to library by fundraiser id and library id so it goes in correct library.
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
// const createLibSuccess = (data) => {
//   console.log(data);
//   $('.messages').text('Success! New library created and added to the end of your library list!');
//   $('#create-form').trigger("reset");
// };
//
// const createFailure = (error) => {
//   console.error(error);
//     $('.messages').text('Oops, something went wrong. Make sure your library is only twenty characters, and that it is a new library name!');
// };
//
// const updateLibSuccess = (data) => {
//   console.log('working!');
//   console.log(data);
//   $('#updateLibName').trigger("reset");
// };
//
// const updateFailure = (error) => {
//   $('.messages').text('Make sure your library is only twenty characters, that it is a new library name, and that it has the correct id!');
//   console.error(error);
// };
//
// const deleteLibSuccess = () => {
//   console.log('working!');
//   $('.show-library').hide();
//   $('#deleteLib').trigger("reset");
// };
//
 const failure = (error) => {
  //  $('.messages').text('Oops, something went wrong. Try again.');
  console.error(error);
 };

module.exports = {
  viewAllSuccess,
  // getLibrariesSuccess,
  // createLibSuccess,
  // updateLibSuccess,
  // deleteLibSuccess,
  failure,
  // updateFailure,
  // createFailure,
};
