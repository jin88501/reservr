/* @flow */

import React, {Component} from 'react';
import { StyleSheet, Text as RNText, View, ScrollView, Dimensions } from 'react-native';

import type { ComponentType } from 'react'

type ReusableHOCProps = {
  children: [ComponentType],
  style: StyleSheet.Styles
}

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
  },
  h1: {
    fontSize: 32
  },
  h2: {
    fontSize: 24
  },
  h3: {
    fontSize: 19
  },
  p: {
    fontSize: 16
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

export const Loading = () => <View><RNText>Loading...</RNText></View>

export const Text = {
  h1: ({ style = [], children = [] }: ReusableHOCProps) => <RNText style={[styles.h1, ...style]}>{children}</RNText>,
  h2: ({ style = [], children = [] }: ReusableHOCProps) => <RNText style={[styles.h2, ...style]}>{children}</RNText>,
  h3: ({ style = [], children = [] }: ReusableHOCProps) => <RNText style={[styles.h3, ...style]}>{children}</RNText>,
  p: ({ style = [], children = [] }: ReusableHOCProps) => <RNText style={[styles.p, ...style]}>{children}</RNText>,
}