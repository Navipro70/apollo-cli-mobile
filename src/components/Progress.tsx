import React from 'react'
import { StyleProp, StyleSheet, ViewStyle } from 'react-native'
import * as Progress from 'react-native-progress'

import { colors } from '~/styles'

interface Props {
  color?: string
  size?: number
  style?: StyleProp<ViewStyle>
}

const STANDARD_SPINNER_SIZE = 30

export const Spinner = ({ color = colors.pink, size = STANDARD_SPINNER_SIZE, style }: Props) => (
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
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
