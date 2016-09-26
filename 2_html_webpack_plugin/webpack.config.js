var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app.js',
  output: {
    path: 'dist',
    publicPath: '',
    filename: 'bundle.js'
  },
  module: {
    loaders: []
  },
  plugins: [
    // read more:
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin()
  ]
};
