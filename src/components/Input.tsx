import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { TextField, View } from 'react-native-ui-lib'
import { TextFieldProps } from 'react-native-ui-lib/typings'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { colors } from '~/styles'

interface Props extends TextFieldProps {
  value: string
  onChangeText: (text: string) => void
  color?: string
  error?: string
  inputIcon?: string
  style?: object
  secure?: boolean
}

export const Input = ({
  style,
  onChangeText,
  value,
  color,
  secure,
  inputIcon,
  error,
  ...rest
}: Props) => {
  const [securePassword, setSecurePassword] = useState<boolean>(secure ?? false)
  let iconName: string = securePassword ? 'eye-off-outline' : 'eye-outline'

  return (
    <View centerV marginV-5 row>
      {Boolean(inputIcon) && (
        <Icon color={color} name={inputIcon as string} size={35} style={styles.inputIcon} />
      )}
      <TextField
        autoCapitalize="none"
        autoCorrect={false}
        color={color}
        error={error}
        secureTextEntry={securePassword}
        style={[styles.textField, style]}
        value={value}
        onChangeText={onChangeText}
        {...rest}
      />
      <View centerV marginB-5 right>
        {secure && (
          <Icon
            color={color}
            name={iconName}
            size={35}
            style={styles.visibleIcon}
            onPress={() => setSecurePassword((prevState) => !prevState)}
          />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textField: {
    fontSize: 20,
    color: colors.white,
  },
  inputIcon: {
    paddingRight: 10,
    marginBottom: 30,
  },
  visibleIcon: {
    position: 'absolute',
    paddingBottom: 30,
  },
})
