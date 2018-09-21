/* @flow */

import React from 'react';
import { StatusBar, StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import Brand from 'reservr-domain/brand/ReactNative'

import { Text } from '../Typography'
import type { ReusableHOCProps } from '../types'

const TOP_MOBILE_TOOLBAR_HEIGHT = 25

const styles = StyleSheet.create({
  FullScreenViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Brand.Skin.bgGray,
    margin: 0,
    width: Dimensions.get('window').width,
  },
  FullScreenScrollViewContainer: {
    flex: 1,
    width: Dimensions.get('window').width
  },
  CardViewContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: Brand.Structure.Spacing2,
    marginLeft: Brand.Structure.Spacing3,
    marginRight: Brand.Structure.Spacing3,
    marginBottom: Brand.Structure.Spacing2,
    height: 65,
    backgroundColor: Brand.Skin.bgWhite
  },
  TransparentCard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: Brand.Structure.Spacing2,
    marginLeft: Brand.Structure.Spacing2,
    marginRight: Brand.Structure.Spacing2,
    marginBottom: Brand.Structure.Spacing2
  },
  TopFormContainer: {
    paddingLeft: Brand.Structure.Spacing2,
    paddingRight: Brand.Structure.Spacing2,
    paddingTop: TOP_MOBILE_TOOLBAR_HEIGHT,
    paddingBottom: Brand.Structure.Spacing2,
    marginBottom: Brand.Structure.Spacing2,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: Brand.Skin.bgBlue
  }
});

export const FullScreenScrollView = ({ children = [], style = [] }: ReusableHOCProps) => (
  <ScrollView style={[styles.FullScreenScrollViewContainer, ...style]}>
     <StatusBar translucent barStyle="light-content" />
    {children}
  </ScrollView>
)

export const FullScreenView = ({ children = [], style = [] }: ReusableHOCProps) => (
  <View style={[styles.FullScreenViewContainer, ...style]}>
    {children}
  </View>
)

export const CardView = ({ children = [], style = [] }: ReusableHOCProps) => (
  <View style={[styles.CardViewContainer, ...style]} >
    {children}
  </View>
)

export const TransparentCardView = ({ children = [], style = [] }: ReusableHOCProps) => (
  <View style={[styles.TransparentCard, ...style]} >
    {children}
  </View>
)

export const EventCardView = ({ 
  id,
  title,
  subtitle,
  date1,
  date2 
}: ReservationProps) => (
  <View style={[styles.CardViewContainer]} key={id}>
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{ position: 'absolute', top: 1, left: 5}}><Text.h2>{title}</Text.h2></View>
      <View style={{ position: 'absolute', top: 27, left: 5}}><Text.h5>{subtitle}</Text.h5></View>
    </View>
    <View style={{flex: 1, flexDirection: 'column', alignContent: 'flex-end', opacity: 0.5}}>
      <View style={{ position: 'absolute', top: 2, right: 5}}><Text.p>{date1}</Text.p></View>
      <View style={{ position: 'absolute', top: 24, right: 5}}><Text.p>{date2}</Text.p></View>
    </View>
  </View>
)

export const TopFormView = ({ children = [], style = [] }: ReusableHOCProps) => (
  <View style={[styles.TopFormContainer, ...style]} >
    {children}
  </View>
)
