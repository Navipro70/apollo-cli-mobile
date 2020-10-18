import React, { useState } from 'react'
import { StyleProp, StyleSheet, ViewStyle } from 'react-native'
import { TextField, View } from 'react-native-ui-lib'
import { TextFieldProps } from 'react-native-ui-lib/typings'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { FieldProps } from '~/lib/hooks'
import { colors } from '~/styles'

interface Props
  extends Omit<TextFieldProps, 'onChange' | 'onTextChange' | 'value'>,
    FieldProps<string | undefined> {
  value: string
  color?: string
  error?: string
  inputIcon?: string
  style?: StyleProp<ViewStyle>
  secure?: boolean
}

export const Input = ({
  style,
  onChange,
  value,
  color,
  secure,
  inputIcon,
  error,
  onSubmit,
  ...rest
}: Props) => {
  const [securePassword, setSecurePassword] = useState<boolean>(secure ?? false)
  let iconName: string = securePassword ? 'eye-off-outline' : 'eye-outline'

  return (
    <View centerV row>
      {inputIcon && (
        <Icon
          color={color ?? colors.aqua}
          name={inputIcon as string}
          size={35}
          style={styles.inputIcon}
        />
      )}
      <TextField
        autoCapitalize="none"
        autoCorrect={false}
        color={colors.aqua}
        error={error}
        maxLength={30}
        returnKeyType="done"
        secureTextEntry={securePassword}
        style={[styles.textField, style]}
        value={value}
        onChangeText={onChange}
        onSubmitEditing={onSubmit}
        {...rest}
      />
      <View centerV marginB-5 right>
        {secure && (
          <Icon
            color={color ?? colors.aqua}
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
    width: '75%',
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
