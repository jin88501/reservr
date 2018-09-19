import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { FullScreenScrollView } from 'reservr-react'

import { GraphQLUrl } from './config'

import AddReservation from './components/AddReservation'
import AllReservations from './components/AllReservations'
import { FullScreenView } from 'reservr-react/Views';

const client = new ApolloClient({
  uri: GraphQLUrl
});

type Props = {};
const App = (props: Props) =>
  <ApolloProvider client={client}>
    <FullScreenView>
      <FullScreenScrollView>
        <AddReservation />
        <AllReservations />
      </FullScreenScrollView>
    </FullScreenView>
  </ApolloProvider>

export default App