/* @flow */

import React, {Component} from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { compose, branch, renderComponent, mapProps, onlyUpdateForKeys } from 'recompose'

import { FullScreenScrollView, CardView, LoadingView, Text, onError } from 'reservr-react'
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

const SearchResultCard = ({ 
  id,
  name,
  hotelName,
  arrivalDate,
  departureDate 
}: ReservationProps) => (
  <CardView key={id}>
    <Text.h3>{name}</Text.h3>
    <Text.h3>{hotelName}</Text.h3>
  </CardView>
)

const SearchResults = ({ loading, reservations }: Reservation) => 
  <FullScreenScrollView>
      {reservations.map(SearchResultCard)}
  </FullScreenScrollView>

const ReservationsViewer = compose(
  cloudQuery,
  onlyUpdateForKeys(['reservations']),
)(SearchResults)

export default ReservationsViewer

