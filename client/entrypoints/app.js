import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { PRIVATE } from 'constants/routes';
import AppProvider from 'lib/app_provider';
import NotFound from 'components/not_found';
import PrivateLayout from 'layouts/private_layout';

import 'styles/global.css';

render(
  <AppProvider>
    <BrowserRouter>
      <PrivateLayout>
        <Switch>
          <Route exact path={PRIVATE.home} component={Home}/>
          <Route path='*' component={NotFound} />
        </Switch>
      </PrivateLayout>
    </BrowserRouter>
  </AppProvider>,
  document.getElementById('app')
);
