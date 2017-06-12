var webpack = require('webpack');
var path = require('path');
var webpackConfig =  require('webpack-config').default;
var devConfig = {
    devServer: {
       contentBase: path.join(__dirname, "staging"),
       compress: false,
       hot : true,
       port: 9736,
       open: true,
    },
    plugins: [
       new webpack.HotModuleReplacementPlugin(),
       new webpack.NamedModulesPlugin()
    ]

};

module.exports = new webpackConfig()
                     .extend('./webpackconfig/webpack-base.config.js')
                     .merge(devConfig).toObject();
