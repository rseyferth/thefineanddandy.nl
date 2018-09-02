const webpack = require('webpack');
const path = require('path');
const moment = require('moment');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.es6'),
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
        test: [/\.jpg/, /\.svg$/],
        use: ['file-loader']
      },
      {
        test: /(\.html)$/,
        use: ['html-loader']
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{ from: 'src/data/shows.json', to: 'data/shows.json' }])
  ]
}