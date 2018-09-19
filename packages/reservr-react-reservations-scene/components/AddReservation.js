/* @flow */

import React, {Fragment} from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import {
  compose,
  withState,
  withHandlers,
  withProps
} from 'recompose'

import { 
  FullScreenScrollView,
  TopFormView,
  CardView,
  LoadingView,
  Text,
  Button,
  onError,
  TextInput
} from 'reservr-react'

import type { Reservation } from 'reservr-domain/entities/reservations/types.flow'

const mutationCreateReservation = gql`
  mutation(
    $name: String,
    $hotelName: String,
    $arrivalDate: String,
    $departureDate: String
  ) {
    createReservation(
      name: $name,
      hotelName: $hotelName,
      arrivalDate: $arrivalDate,
      departureDate: $departureDate
    )
  }
`;

const withFormEvents = compose(
  withState('name', 'updateName', ''),
  withState('hotelName', 'updateHotelName', ''),
  graphql(mutationCreateReservation),
  withHandlers({
    onUpdateName: props => event => {
      props.updateName(event)
    },
    onUpdateHotelName: props => event => {
      props.updateHotelName(event)
    },
    onSubmit: props => event => {
      if(!props.name || !props.hotelName) return
      props.mutate({ 
        variables: {
          name: props.name,
          hotelName: props.hotelName,
          arrivalDate: Date.now().toString(),
          departureDate: (Date.now() + 8.64e+7).toString()
      }})
      .then(({ data: { createReservation } }) => {
        props.updateName('')
        props.updateHotelName('')
        props.dispatch(createReservation)
      })
      .catch(console.error)
    }
  })
)

const AddReservation = withFormEvents(({ 
  onUpdateName,
  onUpdateHotelName,
  onSubmit,
  name,
  hotelName,
}) => (
  <TopFormView>
    <Text.h4>Name</Text.h4>
    <TextInput onChangeText={onUpdateName} value={name} />
    <Text.h4>Hotel</Text.h4>
    <TextInput onChangeText={onUpdateHotelName} value={hotelName} />
    <Button title="Add Last Minute Reservation" onPress={onSubmit} color="#fff" />
  </TopFormView>
))

export default AddReservation
