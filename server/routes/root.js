const { Router }= require('express');

const app = require('./app');
const Graphql = require('../network/graphql');

module.exports = () => {
  const router = new Router();

  router.use((req, res, next) => {
    next();
  });

  // serve data
  router.use('/graphql', Graphql.proxy);

  // logout
  router.post('/logout', (req, res) => {
    req.session = null;
    res.redirect('/log-in');
  });

  // sign up
  router.post('/sign-up', (req, res) => {
    console.warn('NEED TO CONFIGURE SIGN UP');
    res.status(500).json({ message: 'Sign up not configured' });
    //req.session = { token: 'fake-token' };
    //res.status(200).json({ message: 'Sign up succeeded' });
  });

  // login
  router.post('/log-in', (req, res) => {
    console.warn('NEED TO CONFIGURE LOG IN');
    res.status(500).json({ message: 'Log in not configured' });
    //req.session = { token: 'fake-token' };
    //res.status(200).json({ message: 'Sign up succeeded' });
  });

  // serve pages
  router.use('*', app());

  return router;
};
