const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: './',
    filename: 'build.js'
  },
  module: {
    rules: [{ test: /\.js$/, loader: 'babel-loader' }]
  },
  devServer: { overlay: true }
};
