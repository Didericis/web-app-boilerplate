const webpack = require('webpack');
const path = require('path');
const config = require('config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const hotMiddlewareScript = 
  'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

const entry = (file) => [
  'babel-polyfill', 
  'whatwg-fetch', 
  process.env.NODE_ENV === 'production' ? null : hotMiddlewareScript, 
  path.resolve(__dirname, file)
].filter(plugin => !!plugin);

module.exports = {
  devtool: 'inline-source-map',

  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

  entry: {
    app: entry('client/entrypoints/app'),
    public: entry('client/entrypoints/public'),
  },

  /* eslint-disable camelcase */
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'client/components'),
      constants: path.resolve(__dirname, 'constants'),
      containers: path.resolve(__dirname, 'client/containers'),
      redux_utils: path.resolve(__dirname, 'client/redux'),
      dux: path.resolve(__dirname, 'client/redux/ducks'),
      forms: path.resolve(__dirname, 'client/forms'),
      fragments: path.resolve(__dirname, 'client/fragments'),
      hocs: path.resolve(__dirname, 'client/hocs'),
      layouts: path.resolve(__dirname, 'client/layouts'),
      lib: path.resolve(__dirname, 'client/lib'),
      queries: path.resolve(__dirname, 'client/queries'),
      meta: path.resolve(__dirname, 'client/meta'),
      mutations: path.resolve(__dirname, 'client/mutations'),
      schema: path.resolve(__dirname, config.get('graphql').schema),
      styles: path.resolve(__dirname, 'client/styles'),
      // -- TEST ONLY --
      test_utils: path.resolve(__dirname, 'test_utils'),
    },
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].js'
  },

  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, 'client'),
          path.resolve(__dirname, 'constants'),
          path.resolve(__dirname, 'test'),
          path.resolve(__dirname, 'styleguide'),
          path.resolve(__dirname, 'node_modules/css-loader'),
        ],
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2'],
        },
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'node_modules/react-spinkit'),
        ],
        loader: 'style-loader',
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'node_modules/react-spinkit'),
          path.resolve(__dirname, 'node_modules/loaders.css'),
        ],
        loader: 'css-loader',
      },
      {
        test: /\.css$/,
        include: [ 
          path.resolve(__dirname, 'client') 
        ],
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({ 
          loader: 'css-loader',
          query: { 
            localIdentName: '[path][name]__[local]--[hash:base64:5]', 
            modules: true 
          }, 
        })),
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        exclude: /node_modules/,
        query: {
          limit: 10000,
          minetype: 'application/font-woff',
        },
      },
      {
        test: /\.(ttf|eot|svg|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: /node_modules/,
        loader: 'file-loader',
      },
    ].filter(loader => !!loader)
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'css/[name].css',
      ignoreOrder: true,
      allChunks: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({ 
      'CONFIG': JSON.stringify(config.get('public')),
      'IS_BROWSER': JSON.stringify(true),
      'process.env.NODE_ENV': 
        JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    process.env.NODE_ENV === 'production' ? 
      new webpack.optimize.UglifyJsPlugin() : undefined,
    process.env.NODE_ENV === 'production' ? 
      undefined : new webpack.HotModuleReplacementPlugin(),
  ].filter(plugin => !!plugin)
};
