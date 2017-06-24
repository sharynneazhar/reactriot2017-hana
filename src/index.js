import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import registerServiceWorker from './utils/registerServiceWorker';
import App from './components/App';
import 'tachyons';
import './index.css';

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj4aqefvc2x6v0124hgdn0iwh'
});

const client = new ApolloClient({
  networkInterface
});

ReactDOM.render(
  <ApolloProvider client={client}>
  <HashRouter>
    <div>
      <Route path='/' component={App} />
    </div>
  </HashRouter>
  </ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
