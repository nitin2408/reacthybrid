
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
const WebpackConfig = require('webpack-config').default;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const TARGET = process.env.npm_lifecycle_event

var webpackConfig = {};

switch (TARGET) {  
  case 'dev':
    webpackConfig = require('./webpackconfig/webpack-dev.config.js')
    break
  
  case 'prod':
    webpackConfig = require('./webpackconfig/webpack-prod.config.js')
    console.log("gjhfjfgh",webpackConfig)
    break

  default:
    webpackConfig = require('./webpackconfig/webpack-dev.config.js')
    break
}

module.exports = new WebpackConfig().merge(webpackConfig)

