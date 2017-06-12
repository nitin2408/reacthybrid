var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var path = require('path');
 

var config = {
  entry: './app/index.js',
  output: {
    path:   path.resolve(__dirname,'../staging'),
    filename: 'app.bundle.js'
  },
  module : {
  	rules : [
  		{
  			test: /\.scss$/, 
  			use : ExtractTextPlugin.extract({
  				fallback : 'style-loader',
  				loader: ['css-loader','sass-loader'],
  				publicPath : '/staging'
  			})
  		},
  		{ 
  			test: /\.js$/, exclude: /node_modules/, use: "babel-loader" 
  		}
  	]
  },
  plugins: [ 
	  new HtmlWebpackPlugin({
	  	title: "project",
	  	minify: {
	  		collapseWhitespace: true
	  	},
	  	hash : true,
	  	template : "./app/index.html"

	  }),
	  new ExtractTextPlugin({	
	  	filename: "app.css",
	  	allChunks : true
	  }),
	],
}

module.exports =  config;