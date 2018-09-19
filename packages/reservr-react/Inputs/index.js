import React from 'react'
import { Dimensions, TextInput as RNTextInput, Button as RNButton, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  TextInput: {
    height: 40,
    borderColor: 'rgba(0,0,0,0.4)', 
    color: 'rgba(255,255,255,1.0)',
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderWidth: 1,
    marginBottom: 10,
    padding: 4
  },
  InputContainer: {
  }
})

export const Button = RNButton
export const TextInput = (props) => <View style={styles.InputContainer}><RNTextInput {...props} style={styles.TextInput} /></View>
// export const Calendar = () => ()