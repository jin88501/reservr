import React from 'react'
import { Dimensions, TextInput as RNTextInput, Button as RNButton, StyleSheet, View } from 'react-native'
import Brand from 'reservr-domain/brand/ReactNative'

const styles = StyleSheet.create({
  TextInputSingleLine: {
    ...Brand.Typography.TextInputSingleLine
  },
})

export const Button = RNButton
export const TextInput = (props) => <View><RNTextInput {...props} style={styles.TextInputSingleLine} /></View>
