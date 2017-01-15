'use strict';
const config = require('../config');
const store = require('../store');

const viewAllProducts = (data) =>
$.ajax({
    url: config.apiOrigins.production + '/products',
    method: 'GET',
    // headers: {
    //   Authorization: 'Token token=' + store.user.token,
    // },
    data,
  });

  // const getLibraries = (data) =>
  // $.ajax({
  //     url: config.apiOrigins.production+ '/libraries',
  //     method: 'GET',
  //     headers: {
  //       Authorization: 'Token token=' + store.user.token,
  //     },
  //     data,
  //   });
  //
    const createProduct = (data) =>
   $.ajax({
     url: config.apiOrigins.production + '/products',
     method: 'POST',
     headers: {
       Authorization: 'Token token=' + store.user.token,
     },
     data,
   });
  //
  //  const updateLib = (data) =>
  // // console.log(data);
  //
  //   $.ajax({
  //   url: config.apiOrigins.production + '/libraries/' + data.library.id ,
  //   //url: 'http://localhost:4741/libraries/1',
  //     method: 'PATCH',
  //      headers: {
  //      Authorization: 'Token token=' + store.user.token,
  //      },
  //      data,
  //   });
  //
  //
  //   const deleteLib= (data) =>
  //    $.ajax({
  //      url: config.apiOrigins.production + '/libraries/' + data.library.id,
  //       method: 'DELETE',
  //       headers: {
  //       Authorization: 'Token token=' + store.user.token,
  //       },
  //     });
  //


module.exports = {
  viewAllProducts,
  createProduct,
  // updateLib,
  // deleteLib,
  // getLibraries,
};
