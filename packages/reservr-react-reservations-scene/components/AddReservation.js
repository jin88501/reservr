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
  LoadingView,
  Text,
  Button,
  onError,
  TextInput
} from 'reservr-react'

import type { Reservation } from 'reservr-domain/entities/reservations/types.flow'

const AddReservationGraphQL = ({ name, hotelName, arrivalDate, departureDate }) => `
  mutation {
    createReservation(
      name: "${name}",
      hotelName: "${hotelName}",
      arrivalDate: "${arrivalDate}",
      departureDate: "${departureDate}"
    )
  }
`

const submitForm = ({
  hotelName,
  name
}) => {
  const mutation = gql(AddReservationGraphQL({
    name,
    hotelName,
    arrivalDate: Date.now(),
    departureDate: Date.now()
  }))
  const mutate = graphql(mutation)
  mutate()
}

const withFormEvents = compose(
  withState('name', 'updateName', ''),
  withState('hotelName', 'updateHotelName', ''),
  withHandlers({
    onUpdateName: props => event => {
      props.updateName(event)
    },
    onUpdateHotelName: props => event => {
      props.updateHotelName(event)
    },
    onSubmit: props => event => {
      submitForm({
        name: props.name,
        hotelName: props.hotelName
      })
    }
  })
)

const AddReservation = withFormEvents(({ 
  onUpdateName,
  onUpdateHotelName,
  onSubmit,
  name,
  hotelName
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
