/* @flow */

import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { compose, pure, branch, renderComponent, mapProps } from 'recompose';

import { FullScreenScrollView, CardView, Loading, Text } from 'reservr-react';
import type { Reservation } from 'reservr-domain/types/types.flow'

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
  mapProps(response => response.data),
);

const SearchResultCard = ({ id, name, hotelName, arrivalDate, departureDate }: ReservationProps) => (
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
  branch(
    props => props.loading,
    renderComponent(Loading),
  ),
  pure,
)(SearchResults);

export default ReservationsViewer

