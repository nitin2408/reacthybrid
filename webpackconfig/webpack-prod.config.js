var webpack = require('webpack');
var path = require('path');
var webpackConfig =  require('webpack-config').default;


console.log(webpack);

var prodConfig = {
   plugins: [
  new webpack.optimize.CommonsChunkPlugin('common.js'),
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.optimize.AggressiveMergingPlugin()
   ]
  
}



console.log("jkhghjjg")

module.exports = new webpackConfig()
                     .extend('./webpackconfig/webpack-base.config.js')
                     .merge(prodConfig).toObject();
