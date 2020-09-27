import React from 'react'
import { StyleSheet } from 'react-native'
import * as Progress from 'react-native-progress'

interface Props {
  color?: string
  size?: number
  style?: object
}

const STANDARD_SPINNER_SIZE = 21

export const Spinner = ({ color = '#990000', size = STANDARD_SPINNER_SIZE, style }: Props) => (
  <Progress.Circle
    indeterminate
    borderColor={color}
    borderWidth={1.5}
    size={size}
    style={[styles.spinner, style]}
  />
)

const styles = StyleSheet.create({
  spinner: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 20,
    bottom: 0,
    left: 0,
    right: 0,
  },
})
