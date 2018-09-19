// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { GraphQLUrl } from './config'

import ReservationsViewer from './components/ReservationsViewer'

const client = new ApolloClient({
  uri: GraphQLUrl
});

type Props = {};
const App = (props: Props) =>
  <ApolloProvider client={client}>
    <ReservationsViewer />
  </ApolloProvider>

export default App