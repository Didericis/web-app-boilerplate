import React, { Component } from 'react';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import { store } from 'redux_utils';
import { addMockFunctionsToSchema } from 'graphql-tools';
import mockApolloClient, { mockGraphql } from 'test_utils/mock_apollo_client';

export default class MockProviders extends Component {
  componentWillMount() {
    const { graphqlMocks, initialStoreState } = this.props;
    this.store = store(initialStoreState);
    mockGraphql(graphqlMocks);
  }
  componentWillReceiveProps({ graphqlMocks, initialStoreState }) {
    this.store = store(initialStoreState);
    mockGraphql(graphqlMocks);
  }
  getStoreState() {
    return this.store.getState();
  }
  render() {
    const { children } = this.props;

    return (
      <MemoryRouter>
        <Provider store={this.store}>
          <ApolloProvider client={mockApolloClient}>
            {children}
          </ApolloProvider>
        </Provider>
      </MemoryRouter>
    );
  }
}
