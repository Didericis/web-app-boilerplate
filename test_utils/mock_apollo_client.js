import Faker from 'faker';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { SchemaLink } from 'apollo-link-schema';

import { createClient } from 'lib/apollo_client';
import schemaString from 'raw-loader!schema';

// Test schema
export const schema = makeExecutableSchema({ typeDefs: schemaString });

// Default mocks
addMockFunctionsToSchema({ 
  schema,
  mocks: {
    ID: () => Faker.random.uuid(),
    String: () => Faker.lorem.sentence(),
  }
});

// Add custom mocks to the test schema
export const mockGraphql = (mocks = {}) => {
  addMockFunctionsToSchema({ 
    schema,
    mocks 
  });
};

// Apollo client used for testing
export default createClient({ link: new SchemaLink({ schema }) });
