/* @flow */

import React from 'react';
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import { Text } from '../Typography'

import type { ReusableHOCProps } from '../types'

const styles = StyleSheet.create({
  FullScreenViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.06)',
    margin: 0,
    width: Dimensions.get('window').width,
    paddingTop: 15,
  },
  FullScreenScrollViewContainer: {
    flex: 1,
    width: Dimensions.get('window').width,
    paddingTop: 15,
  },
  CardViewContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    height: 65,
    backgroundColor: 'rgba(255,255,255, 1.0)'
  },
  TransparentCard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },
  TopFormContainer: {
    padding: 10,
    margin: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(15,53,100,0.9)'
  }
});

export const FullScreenScrollView = ({ children = [], style = [] }: ReusableHOCProps) => (
  <ScrollView style={[styles.FullScreenScrollViewContainer, ...style]}>
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
