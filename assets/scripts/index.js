'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example')
const upload = require('./upload')

$(() => {
  $('#application-x-www-form-data').on('submit', upload.createUploadEncoded)
  $('#multipart-form-data').on('submit', upload.createUploadMultiPart)
})
