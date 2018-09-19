import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { FullScreenScrollView } from 'reservr-react'

import { GraphQLUrl } from './config'

import AddReservation from './components/AddReservation'
import { withReservationsLoader, SearchResults } from './components/ReservationsViewer'

const client = new ApolloClient({
  uri: GraphQLUrl
});

const Main = withReservationsLoader(({ reservations }) =>
  <FullScreenScrollView>
    <AddReservation />
    <SearchResults reservations={ reservations } />
  </FullScreenScrollView>
)

type Props = {};
const App = (props: Props) =>
  <ApolloProvider client={client}>
    <Main />
  </ApolloProvider>

export default App