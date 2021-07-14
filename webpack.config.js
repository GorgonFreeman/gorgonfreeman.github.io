const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
  entry: './src/assets/scripts.js',
  output: {
    path: path.resolve('./dist/assets'),
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
    contentBase: path.resolve('./dist'),
    compress: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/html/index.html'
    }),
  ],
}