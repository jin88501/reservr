/* @flow */

import React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';

import type { ReusableHOCProps } from '../types'

import Brand from 'reservr-domain/brand/ReactNative'

const TypographyStyles = StyleSheet.create({
  ...Brand.Typography
})

export const Text = {
  h1: ({ style = [], children = [] }: ReusableHOCProps) => <RNText ellipsisMode={'tail'} numberOfLines={1} style={[TypographyStyles.h1, ...style]}>{children}</RNText>,
  h2: ({ style = [], children = [] }: ReusableHOCProps) => <RNText ellipsisMode={'tail'} numberOfLines={1} style={[TypographyStyles.h2, ...style]}>{children}</RNText>,
  h3: ({ style = [], children = [] }: ReusableHOCProps) => <RNText ellipsisMode={'tail'} numberOfLines={1} style={[TypographyStyles.h3, ...style]}>{children}</RNText>,
  h4: ({ style = [], children = [] }: ReusableHOCProps) => <RNText ellipsisMode={'tail'} numberOfLines={1} style={[TypographyStyles.h4, ...style]}>{children.toUpperCase()}</RNText>,
  h5: ({ style = [], children = [] }: ReusableHOCProps) => <RNText ellipsisMode={'tail'} numberOfLines={1} style={[TypographyStyles.h5, ...style]}>{children.toUpperCase()}</RNText>,
  p: ({ style = [], children = [] }: ReusableHOCProps) => <RNText ellipsisMode={'tail'} numberOfLines={1} style={[TypographyStyles.p, ...style]}>{children}</RNText>,
}