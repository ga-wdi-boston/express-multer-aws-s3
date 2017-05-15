'use strict'

const getFormFields = require('../../lib/get-form-fields')

const createUploadEncoded = function (event) {
  event.preventDefault()
  console.log("it did something")

  let data = getFormFields(event.target)

  return $.ajax({
    url: 'http://localhost:4741/uploads',
    method: 'POST',
    data
  })
}

const createUploadMultiPart = function (event) {
  event.preventDefault()
  console.log("it did something in multipart")

  // let data = getFormFields(event.target)
  let data = new FormData(event.target)


  return $.ajax({
    url: 'http://localhost:4741/uploads',
    method: 'POST',
    data,
    contentType: false,
    processData: false
  })
}

module.exports = {
  createUploadEncoded,
  createUploadMultiPart
}
