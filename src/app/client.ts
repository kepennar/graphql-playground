import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { environment } from '../environments/environment';

const networkInterface = createNetworkInterface({
  uri: environment.graphql.request.url
});

// The x-graphcool-source header is to let the server know that the example app has started.
// (Not necessary for normal projects)
networkInterface.use([{
  applyMiddleware (req, next) {
    if (!req.options.headers) {
      // Create the header object if needed.
      req.options.headers = {};
    }
    req.options.headers['x-graphcool-source'] = 'example:angular-apollo-instagram';
    next();
  },
}]);

const client = new ApolloClient({ networkInterface });

export function provideClient(): ApolloClient {
  return client;
}
