/* @flow */

import React from 'react';
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';

import type { ReusableHOCProps } from '../types'

const styles = StyleSheet.create({
  FullScreenViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 15
  },
  CardViewContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: Dimensions.get('window').width * 0.9,
    padding: 10,
    margin: 10,
    backgroundColor: 'rgba(255,255,255,1.0)'
  }
});

export const FullScreenScrollView = ({ children = [], style = [] }: ReusableHOCProps) => (
  <View style={[styles.FullScreenViewContainer, ...style]}>
    <ScrollView>
      {children}
    </ScrollView>
  </View>
)

export const CardView = ({ children = [], style = [] }: ReusableHOCProps) => (
  <View style={[styles.CardViewContainer, ...style]} >
    {children}
  </View>
)

export { View } from 'react-native'