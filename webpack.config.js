const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
        'style-loader', // Inject styles into DOM
        'css-loader', // Turns css into commomJS
        'sass-loader'] // Turns sass into css
      }
    ]
  }
};
