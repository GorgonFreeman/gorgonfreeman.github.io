const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/assets/scripts.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(svg|html)$/i,
        loader: 'html-loader',
        options: {
          interpolate: true,
        },
      },
    ],
  },
  devServer: {
    contentBase: 'dist',
    compress: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/html/index.html'
    }),
  ],
}