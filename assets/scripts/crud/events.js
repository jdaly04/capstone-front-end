'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');
// const editProductsTemplate = require('../templates/editProducts.handlebars');
//const store = require('../store.js');

const onCreateNewButton = function(event) {
  event.preventDefault();
  $('#create-modal').modal('show');
};

const onCreateProduct = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createProduct(data)
    .then(ui.createProductSuccess)
    // .then(function() {
    //   onViewProducts();
    // })
    .catch(ui.failure);
};

// const onUpdateProductButton = function(event) {
//   event.preventDefault();
//   $('#update-modal').modal('show');
// };

const onDeleteProduct = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.deleteProduct(data)
    .then(ui.deleteProductSuccess)
    .catch(ui.failure);
};

const onUpdateProduct = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.updateProduct(data)
    .then(ui.updateProductSuccess)
    .catch(ui.updateFailure);
};

const onViewProducts = function(event) {
  event.preventDefault();
  api.viewAllProducts()
    .then(ui.viewAllSuccess)
    .then(function() {
      $('#new-prod').on('click', onCreateNewButton);
      $('#create-form').on('submit', onCreateProduct);
      //$('.edit-product').on('click', onUpdateProductButton);
      $('.updateProduct').on('submit', onUpdateProduct);
      $('.deleteProduct').on('submit', onDeleteProduct);

    })  //getAllSuccess needs to be updated
    .catch(ui.failure);
  // }
};
//
    const getAllHandler = () => {
      $('#view-all').on('click', onViewProducts);
    };

module.exports = {
  onViewProducts,
  onCreateNewButton,
  // onUpdateProductButton,
  getAllHandler,
  onCreateProduct,
  onUpdateProduct,
  onDeleteProduct,
};
