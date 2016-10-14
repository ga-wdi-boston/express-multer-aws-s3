'use strict';

const getFormFields = require('../../lib/get-form-fields');

const handleUrlEncoded = (event) => {
  event.preventDefault();

  // we use getFormFields with url-encoded forms (enctype unset)
  let data = getFormFields(event.target);

  return new Promise((resolve, reject) => {
    $.ajax({
      url: 'http://localhost:3000/uploads',
      method: 'POST',
      data,
      success (data) {
        resolve(data);
      },
      error (jqxhr) {
        reject(jqxhr);
      },
    });
  })
  .then(console.log)
  ;
};

const handleMultiPartFormData = (event) => {
  event.preventDefault();

  // we use FormData with multipart forms (enctype=multipart/form-data)
  let data = new FormData(event.target);

  return new Promise((resolve, reject) => {
    $.ajax({
      url: 'http://localhost:3000/uploads',
      method: 'POST',
      data,
      contentType: false,
      processData: false,
      success (data) {
        resolve(data);
      },
      error (jqxhr) {
        reject(jqxhr);
      },
    });
  })
  .then(console.log)
  .catch(console.error)
  ;
};

$(() => {
  $('#application-x-www-form-data').on('submit', handleUrlEncoded);
  $('#multipart-form-data').on('submit', handleMultiPartFormData);
});
