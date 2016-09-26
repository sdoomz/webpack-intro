var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // context: path.join( __dirname ),
  entry: [
    'webpack-dev-server/client?http://localhost:3010',
    'webpack/hot/only-dev-server',
    './'
  ],
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: [
        // read more:
        // https://github.com/gaearon/react-hot-boilerplate
        'react-hot',
        'babel'
      ],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: 'file?name=assets/[name].[ext]'
    }]
  },
  plugins: [
    // read more:
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    // read more:
    // https://github.com/webpack/extract-text-webpack-plugin
    new ExtractTextPlugin('styles.css')
  ]
};
