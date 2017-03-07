'use strict';

let clone = require('clone');

// clone the webpack config to separate configuration of webpack and dev server
let webpackConfig = clone(require('./webpack').options);

// enable live reload without a script tag
webpackConfig.entry.vendor.unshift('webpack-dev-server/client?http://localhost:7165');

module.exports = {
  options: {
    webpack: webpackConfig,
    port: 7165,
  },

  start: {
    keepAlive: true,
    webpack: {
      devtool: 'source-map',
      debug: 'true',
    },
  },
};
