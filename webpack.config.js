const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
  entry: './src/assets/scripts.js',
  output: {
    path: path.resolve('./dist/assets'),
    filename: 'bundle.js'
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