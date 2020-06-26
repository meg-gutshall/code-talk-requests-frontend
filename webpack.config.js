const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
  },
  devtool: 'eval-cheap-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    new ManifestPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      title: 'HTML Webpack Template',
      lang: 'en-US',
      meta: [
        {
          viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        },
      ],
      scripts: [
        {
          src: 'app.bundle.js',
          type: 'module'
        }
      ],
      bodyHtmlSnippet: 
      `<!-- Begin navbar -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarToggler">
        <!-- Menu items -->
        </div>
      </nav>
      <!-- End navbar -->

      <!-- Begin main container -->
      <main role="main" class="flex-shrink-0">
        <div class="container" id="main">

        </div>
      </main>
      <!-- End main container -->

      <!-- Begin footer -->
      <footer class="footer mt-auto py-3">
        <div class="container sticky-footer">
          <span class="text-muted sticky-footer">Place sticky footer content here.</span>
        </div>
      </footer>
      <!-- End footer -->`,
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
    ],
  },
};