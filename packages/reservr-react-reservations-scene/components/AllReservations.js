/* @flow */

import React, {Fragment} from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import {
  compose,
  branch,
  renderComponent,
  mapProps,
  onlyUpdateForKeys,
  withState,
  withHandlers
} from 'recompose'

import { 
  FullScreenScrollView,
  TopFormView,
  CardView,
  EventCardView,
  LoadingView,
  Text,
  Button,
  onError,
  TextInput
} from 'reservr-react'
import type { Reservation } from 'reservr-domain/entities/reservations/types.flow'

const cloudQuery = compose(
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
  mapProps(response => response.data)
)

const convertToDate = (unix) => {
  const date = new Date(parseInt(unix))
  return `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`
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

const withReservationsData = compose(
  cloudQuery,
  onlyUpdateForKeys(['reservations']),
)

const AllReservations = withReservationsData(({ reservations }: Reservation) => 
  reservations.reverse().map(SearchResultCard)
)

export default AllReservations
