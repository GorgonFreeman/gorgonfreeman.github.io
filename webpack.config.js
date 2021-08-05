const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
  entry: {
    scripts: './src/assets/scripts.js',
    styles: './src/styles/styles.scss'
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
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
      {
        test: /\.s?css/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            }
          }
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets',
              publicPath: '',
              name: '[name].[ext]'
            },
          },
        ],
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
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
}