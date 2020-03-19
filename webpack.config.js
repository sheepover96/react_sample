const path = require('path');

module.exports = ( env, argv ) => ({
  entry: {
    bundle: './src/index.jsx'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: [
          /node_modules/
        ],
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        // query: {
        //   cacheDirectory: true,
        //   presets: ['react', 'es2015']
        // }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
});
