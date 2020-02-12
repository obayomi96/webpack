const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'main.[contentHash].js', // use [contentHash] for cache busting
    path: path.resolve(__dirname, 'dist')
  },
});
