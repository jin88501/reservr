/* @flow */

import React, {Fragment} from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import {
  compose,
  branch,
  renderComponent,
  mapProps,
  lifecycle,
  withProps,
  onlyUpdateForKeys
} from 'recompose'

import { 
  FullScreenScrollView,
  TopFormView,
  TransparentCardView,
  EventCardView,
  LoadingView,
  Text,
  Button,
  onError,
  TextInput
} from 'reservr-react'

import type { Reservation } from 'reservr-domain/entities/reservations/types.flow'

const withReservationsData = compose(
  graphql(gql`
    query {
      reservations {
        hotelName,
        name,
        arrivalDate,
        departureDate,
        id
      }
    }
  `),
  onError('Network request failed.'),
  branch(
    props => props.data.loading,
    renderComponent(LoadingView),
  ),
  withProps(response => response.data),
  onlyUpdateForKeys(['reservations']),
  branch(
    ({ reservations }) => !reservations,
    renderComponent(() => <TransparentCardView><Text.h2>Can't connect to server.</Text.h2></TransparentCardView>)
  ),
  lifecycle({
    componentDidUpdate: ({ refetch }) => {
      refetch()
    }
  })
)

const convertToDate = (unix) => {
  const date = new Date(parseInt(unix))
  return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`
} 

const SearchResultCard = ({ 
  id,
  name,
  hotelName,
  arrivalDate,
  departureDate 
}: ReservationProps) => (
  <EventCardView 
    key={id}
    title={name}
    subtitle={hotelName}
    date1={convertToDate(arrivalDate)}
    date2={convertToDate(departureDate)}
  />
)

const AllReservations = withReservationsData(({ reservations }: Reservation) => 
  reservations.reverse().map(SearchResultCard)
)

export default AllReservations
