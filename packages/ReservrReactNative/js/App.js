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

import ReservationsViewer from './ReservationsViewer/ReservationsViewer'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

type Props = {};
const App = (props: Props) =>
  <ApolloProvider client={client}>
    <ReservationsViewer />
  </ApolloProvider>

export default App