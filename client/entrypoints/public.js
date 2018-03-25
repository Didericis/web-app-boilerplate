import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { PUBLIC, PRIVATE, matchRoutes } from 'constants/routes';
import AppProvider from 'lib/app_provider';
import Home from 'components/home';
import Login from 'containers/login';
import NotFound from 'components/not_found';
import SignUp from 'containers/sign_up';
import PublicLayout from 'layouts/public_layout';

import 'styles/global.css';

const LoginRedirect = ({ location }) => (
  <Redirect 
    to={{ pathname: '/log-in', search: `?redirect=${location.pathname}` }}/>
);
LoginRedirect.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired,
};

render(
  <AppProvider>
    <BrowserRouter>
      <PublicLayout>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path={PUBLIC.login} exact component={Login}/>
          <Route path={PUBLIC.signUp} exact component={SignUp}/>
          <Route path={matchRoutes(PRIVATE)} exact component={LoginRedirect}/>
          <Route path='*' component={NotFound}/>
        </Switch>
      </PublicLayout>
    </BrowserRouter>
  </AppProvider>,
  document.getElementById('app')
);
