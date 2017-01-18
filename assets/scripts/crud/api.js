'use strict';
const config = require('../config');
const store = require('../store');

const viewAllProducts = (data) => {
  const request = {
    url: config.apiOrigins.production + '/products',
    method: 'GET',
    data,
  };
  if (store.user) {
    request.headers ={
      Authorization: 'Token token=' + store.user.token,
    };
  }
  return $.ajax(request);
};

const createProduct = (data) =>
  $.ajax({
    url: config.apiOrigins.production + '/products',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data,
  });

const updateProduct = (data) =>
  $.ajax({
    url: config.apiOrigins.production + '/products/' + data.product.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data,
  });

const deleteProduct = (data) =>
  $.ajax({
    url: config.apiOrigins.production + '/products/' + data.product.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });





module.exports = {
  viewAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
