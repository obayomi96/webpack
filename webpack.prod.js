const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // Must be destructured
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Minify & extract css
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin'); // For minification

const common = require('./webpack.common');

module.exports = merge(common, { // merge common webpack file with prod
  mode: 'production',
  output: {
    filename: '[name].[contentHash].bundle.js', 
    // Use name to specify other bundle files aside main app bundle file
    // use [contentHash] for cache busting
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(), // minimizer for css
      new TerserPlugin(), // minimizer for javascript
      new HtmlWebpackPlugin({
        template: './src/template.html',
        // Above, use this file as out template to create html file in dist
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contentHash].css'
    }),
    new CleanWebpackPlugin() // To remove unused build files from dist
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
        MiniCssExtractPlugin.loader, 
        // Above extracts css file ssepereately for better performance in production
        'css-loader', // Turns css into commomJS
        'sass-loader' // Turns sass into css
        ]
      },
    ]
  }
});
