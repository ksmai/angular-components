const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const paths = require('./paths');

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: {
    polyfills: paths.polyfills,
    main: paths.main,
  },

  output: {
    path: paths.docs,
    publicPath: paths.publicPath,
    filename: '[name].bundle.js',
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  module: {
    rules: [
      {
        // workaround issue #120 before #122 is merged
        // see https://github.com/abpetkov/switchery/pull/122
        // and https://github.com/abpetkov/switchery/issues/120
        test: /switchery\.js$/,
        use: {
          loader: 'string-replace-loader',
          options: {
            search: 'function FastClick(layer) {',
            replace: 'function FastClick(layer) {_fastClick.call(window,layer);};function _fastClick(layer){',
          },
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: true,
            caseSensitive: true,
            removeAttributeQuotes: false,
            conservativeCollapse: false,
          },
        },
      },
      {
        test: /\.(?:sa|s?c)ss$/,
        include: paths.app,
        use: ['to-string-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(?:sa|s?c)ss$/,
        exclude: paths.app,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader', 'angular2-template-loader'],
      },
      {
        test: /\.(?:gif|png|jpe?g|svg|eot|ttf|woff2?)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      },
    ],
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ContextReplacementPlugin(
      /angular(?:\\|\/)core(?:\\|\/)@angular/,
      paths.src,
      {}
    ),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'polyfills',
      minChunks: Infinity,
    }),
    new HTMLPlugin({
      template: paths.index,
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery', // needed by morris.js
      Raphael: 'raphael', // needed by morris.js
      'window.jQuery': 'jquery', // bootstrap-editable
      'moment': 'moment', // bootstrap-editable
    }),
  ],

  devServer: {
    hot: true,
    noInfo: true,
    historyApiFallback: {
      index: paths.publicPath,
    },
  },
};
