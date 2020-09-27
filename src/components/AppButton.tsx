import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity, Text, View, TouchableOpacityProps } from 'react-native'

import { colors } from '../styles'

import { Spinner } from './Progress'

interface TProps extends TouchableOpacityProps {
  onPress: () => void
  title: string
  style?: object
  spinnerStyle?: object
  loading?: boolean
}

export const AppButton: FC<TProps> = ({
  onPress,
  title,
  style,
  loading,
  spinnerStyle,
  ...rest
}) => (
  <TouchableOpacity
    activeOpacity={0.5}
    disabled={loading}
    style={styles.container}
    onPress={onPress}
    {...rest}
  >
    {loading && <Spinner color={colors.red} size={30} style={spinnerStyle} />}
    <View style={[styles.appButtonWrapper, style, loading && styles.loadingOpacity]}>
      <Text style={styles.appButtonText}>{title}</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appButtonWrapper: {
    elevation: 8,
    height: 60,
    backgroundColor: colors.aqua,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appButtonText: {
    fontSize: 18,
    color: colors.white,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  loadingOpacity: {
    opacity: 0.2,
  },
})
