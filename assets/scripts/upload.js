'use strict';

const getFormFields = require('../../lib/get-form-fields');

const createUploadEncoded = function (event) {
  event.preventDefault();
  console.log("IT DID SOMETHING!");

  let data = getFormFields(event.target);

  console.log("data is ", data);

  return $.ajax({
    url: 'http://localhost:4741/uploads',
    method: 'POST',
    data
  })
};

const createUploadMultiPart = function (event) {
  event.preventDefault();
  console.log("Inside multi part!");

  // let data = getFormFields(event.target);
  let data = new FormData(event.target);

  console.log('data is ', data);
  console.log('image title is ', data.get('image[title]'));

  return $.ajax({
    url: 'http://localhost:4741/uploads',
    method: 'POST',
    data,
    contentType: false,
    processData: false
  })
};

module.exports = {
  createUploadEncoded,
  createUploadMultiPart,
};
