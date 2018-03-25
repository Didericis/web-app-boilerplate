import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';

import client from 'lib/apollo_client';
import { store } from 'redux_utils';

// for react-click-outside and safari 
// https://github.com/kentor/react-click-outside/issues/4
if ('ontouchstart' in document.documentElement) {
  document.body.style.cursor = 'pointer';
}

export default class AppProvider extends Component {
  static propTypes = {
    children: PropTypes.node,
  }
  render() {
    const { children } = this.props;
    return (
      <ApolloProvider client={client}>
        <Provider store={store()}>
          {children}
        </Provider>
      </ApolloProvider>
    );
  }
}
