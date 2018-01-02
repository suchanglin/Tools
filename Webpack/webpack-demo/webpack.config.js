/*
* @Author: Administrator
* @Date:   2018-01-02 18:32:31
* @Last Modified by:   Administrator
* @Last Modified time: 2018-01-02 20:02:50
*/
   const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
 const CleanWebpackPlugin = require('clean-webpack-plugin');

  module.exports = {
    entry: {
      app: './src/index.js',
      print: './src/print.js'
    },
    devtool: 'inline-source-map',
    devServer: {
     contentBase: './dist'
   },
    plugins: [
     new CleanWebpackPlugin(['dist']),
     new HtmlWebpackPlugin({
        title: 'Output Management'
      })
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };
