import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { compose, withHandlers, withState } from 'recompose'

import { FullScreenScrollView } from 'reservr-react'

import { GraphQLUrl } from './config'

import AddReservation from './components/AddReservation'
import AllReservations from './components/AllReservations'
import { FullScreenView } from 'reservr-react/Views';

const client = new ApolloClient({
  uri: GraphQLUrl
});

const withStore = compose(
  withState('store', 'updateStore', 0),
  withHandlers({
    dispatch: props => event => {
      props.updateStore(event)
    }
  })
)

const Main = withStore(props => (
  <FullScreenView>
    <FullScreenScrollView>
      <AddReservation {...props} />
      <AllReservations {...props} />
    </FullScreenScrollView>
  </FullScreenView>
))

type Props = {};
const App = (props: Props) =>
  <ApolloProvider client={client}>
    <Main />
  </ApolloProvider>

export default App