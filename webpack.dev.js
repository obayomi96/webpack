const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(common, { // merge common webpack file with dev
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
});
