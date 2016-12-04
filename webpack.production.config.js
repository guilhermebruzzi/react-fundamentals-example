const webpack = require('webpack');

const baseWebpackConfig = require('./webpack.config.js');

baseWebpackConfig.devtool = 'cheap-module-source-map';

baseWebpackConfig.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false,
      },
      comments: false
  })
];

module.exports = baseWebpackConfig;
