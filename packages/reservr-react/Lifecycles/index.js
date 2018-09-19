/* @flow */

import React from 'react';
import { compose,  branch, lifecycle, renderComponent } from 'recompose'

import type { ReusableHOCProps } from '../types'

import { CardView, FullScreenView } from '../Views';
import { Text } from '../Typography';

const ErrorView = ({ message = 'Something went wrong.' }) => 
  <CardView><Text.p>{ message }</Text.p></CardView>

export const onError = message => compose(
  lifecycle({
    componentDidCatch(error, errorInfo) {
      this.setState({ error, errorInfo, message })
      console.error(message)
      console.error(error)
      console.error(error.info)
    },
  }),
  branch(props => props.error, renderComponent(ErrorView)),
)

export const LoadingView = () => <FullScreenView><Text.h1>Loading...</Text.h1></FullScreenView>

