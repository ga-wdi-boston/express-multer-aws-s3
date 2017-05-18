'use strict'

const success = function (data) {
  console.log('success data is:', data)
}

const error = function (error) {
  console.log('error is:', error)
}

module.exports = {
  success,
  error
}
