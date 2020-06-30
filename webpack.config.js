const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'eval-cheap-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new ManifestPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Flatiron Study Group Central',
      template: 'template.html',
      scriptLoading: 'defer',
      meta: {
        charset: {charset: 'UTF-8'},
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.html$/i,
        use: [
          'html-loader',
        ],
      },
    ],
  },
};