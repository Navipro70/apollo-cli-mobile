import React, { FC } from 'react'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'

export const DismissKeyboard: FC = ({ children }) => (
  <TouchableWithoutFeedback children={children} onPress={Keyboard.dismiss} />
)
