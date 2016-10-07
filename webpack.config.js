const path = require('path');

module.exports = {
  devtool: 'eval-source-map',

  entry: path.join(__dirname, 'src', 'components', 'App.js'),

  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },

  devServer: {
    contentBase: './static',
    colors: true,
    historyApiFallback: true,
    inline: true,
  },
};
