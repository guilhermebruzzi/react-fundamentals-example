const path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js'
  },
  devServer: {
    inline: true
  },
  devtool: 'eval',
  module: {
    loaders: [
      {
        test: /.css$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
      },
      {
        test: /.png$/,
        loader: 'url?limit=10000'
      },
      {
        test: /.(jpg|svg)$/,
        loader: 'file'
      },
      {
        test: /.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: [
            "es2015", "react"
          ]
        }
      }
    ]
  }
};
