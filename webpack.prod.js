const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // Must be destructured
const common = require('./webpack.common');

module.exports = merge(common, { // merge common webpack file with prod
  mode: 'production',
  output: {
    filename: '[name].[contentHash].bundle.js', 
    // Use name to specify other bundle files aside main app bundle file
    // use [contentHash] for cache busting
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new CleanWebpackPlugin()] // To remove unused build files from dist
});
