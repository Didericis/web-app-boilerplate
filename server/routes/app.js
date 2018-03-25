const { Router }= require('express');
const path = require('path');
const config = require('config');

module.exports = () => {
  const router = new Router();

  router.get('*', (req, res) => {
    if (!req.session.token) {
      res.render(path.resolve(__dirname, '../../templates/index.html'), {
        script: '/js/public.js',
        styles: '/css/public.css',
      });
    } else {
      res.render(path.resolve(__dirname, '../../templates/index.html'), {
        script: '/js/app.js',
        styles: '/css/app.css',
        reduxState: JSON.stringify({
          config: {
            autoLogoutTimeout: config.get('public').autoLogoutTimeout,
            idleTimeout: config.get('public').idleTimeout,
          }
        })
      });
    }
  });

  return router;
};
