import React from 'react';
import 'styles/global.css';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';

import { store } from 'redux_utils';
import mockApolloClient from 'test_utils/mock_apollo_client';

export default function Wrapper(props) {
  return (
    <MemoryRouter>
      <Provider store={store()}>
        <ApolloProvider client={mockApolloClient}>
          <div style={{ backgroundColor: 'black', color: '#fdf6e3', fontFamily: 'Economica' }}>
            {props.children}
          </div>
        </ApolloProvider>
      </Provider>
    </MemoryRouter>
  );
}
