var webpack = require('webpack');
var path = require('path');
var moment = require('moment');

module.exports = {
  entry: path.resolve(__dirname, 'src/app.es6'),
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.es6$/],
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /(\.less)$/,
        exclude: /node_modules/,
        use: ['style-loader' ,'css-loader', 'less-loader']
      },
      {
        test: /(\.jpg)$/,
        use: ['file-loader']
      }
    ]
  }
}