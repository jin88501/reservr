/* @flow */

import React, { Fragment } from 'react';
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

export const LoadingView = () => (
  <Fragment>
    <CardView>
      <Text.h3 />
    </CardView>
    <CardView>
      <Text.h3 />
    </CardView>
    <CardView>
      <Text.h3 />
    </CardView>
  </Fragment>
)