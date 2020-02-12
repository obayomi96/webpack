const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html'
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
      }
    ]
  },
};
