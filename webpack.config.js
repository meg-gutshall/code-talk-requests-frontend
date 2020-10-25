const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const config = {
  entry: './src/entry.js',
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]ss)$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sourceMap: true
            }
          }
        ],
      }, {
        test: /\.(png|jpg|gif)$/i,
        use: {
          loader: 'file-loader',
        }
      }, {
        test: /\.(ttf|svg|otf|eot|woff(2)?)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }
      }, {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ManifestPlugin(),
    new HtmlWebpackPlugin({
      title: 'Code Talk Requests',
      template: 'template.html',
      scriptLoading: 'defer',
      meta: {
        charset: {charset: 'UTF-8'},
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      }
    })
  ]
};

module.exports = (env, argv) => {
  
  switch (argv.mode) {
    case 'development':
      config.devtool = 'eval-source-map';
      break;
    case 'production':
      config.devtool = 'source-map';
      break;
    default:
      config.mode = 'development';
      config.devtool = 'eval-source-map';
      break;
  }

  return config;
};
