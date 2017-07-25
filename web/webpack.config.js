var webpack = require("webpack");

module.exports = {
  entry: "./webapp",
  resolve: {
    modulesDirectories: [
      "../node_modules"
    ]
  },
  output: {
    publicPath: "web/",
    filename: "bundle.js"
  },
  debug: true,
  devtool: "#eval-source-map",
  plugins: [
    new webpack.DefinePlugin({
      "global.GENTLY": false
    })
  ],
  module: {
    loaders: [{
      test: /\.(js|jsx|es6)$/,
      exclude: /(node_modules|bower_components)/,
      loader: "babel-loader"
    }, {
      test: /\.less$/, 
      loader: "style!css!less" 
    }, {
      test: /\.woff?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url-loader"
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url-loader"
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url-loader"
    }, ]
  },
  node: {
    __dirname: true,
  }
};