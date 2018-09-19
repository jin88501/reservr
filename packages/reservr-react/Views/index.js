/* @flow */

import React from 'react';
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';

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
    margin: 0,
    width: Dimensions.get('window').width,
    paddingTop: 15,
  },
  CardViewContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    margin: 10,
    backgroundColor: 'rgba(255,255,255, 1.0)'
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


export const TopFormView = ({ children = [], style = [] }: ReusableHOCProps) => (
  <View style={[styles.TopFormContainer, ...style]} >
    {children}
  </View>
)
