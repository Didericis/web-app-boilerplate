module.exports.applyWebpackMiddleware = (app) => {
  const config = require('../../webpack.config');
  const compiler = require('webpack')(config);
  const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);
  const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, {
    stats: 'normal',
    publicPath: config.output.publicPath,
  });

  app.use(webpackDevMiddleware);
  app.use(webpackHotMiddleware);
};
