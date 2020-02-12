const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, { // merge common webpack file with dev
  mode: 'development',
  output: {
    filename: '[name].js', 
    // To specify whatever name of the bundle file is when there is multiple
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      // Above, use this file as out template to create html file in dist
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
        'style-loader', // Inject styles into DOM
        'css-loader', // Turns css into commomJS
        'sass-loader' // Turns sass into css
        ]
      },
    ]
  }
});
