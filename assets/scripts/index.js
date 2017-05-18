'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

const uploadEvents = require('./uploads/events')

$(() => {
  setAPIOrigin(location, config)
  // $('#application-x-www-form-data').on('submit', uploadEvents.createUploadEncoded)
  // $('#multipart-form-data').on('submit', uploadEvents.createUploadMultiPart)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
