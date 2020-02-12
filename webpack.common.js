module.exports = {
  entry: {
    main: './src/index.js',
    vandor: './src/vendor.js'
  },
  // Above, is is done so we can have multiple entry points incase of other scripts 
  // that should be seperated from our app bundle
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'] // Html, images loader
      },
      {
        test: /\.(svg|png|jpeg|jpg|gif)$/,
        use: {
          loader: 'file-loader', // Loads all kind of file and sends into dist folder
          options: {
            name: '[name].[hash].[ext]', // Creates a file in dist with a hash & ext
            outputPath: 'assets',
            esModule: false // Added to inject correct file and not esModule
          }
        }
      }
    ]
  },
};
