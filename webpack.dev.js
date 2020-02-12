const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(common, { // merge common webpack file with dev
  mode: 'development',
  output: {
    filename: '[name].js', 
    // To specify whatever name of the bundle file is when there is multiple
    path: path.resolve(__dirname, 'dist')
  },
});
