import AsyncStorage from '@react-native-community/async-storage'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useCallback } from 'react'

import { StorageKeys } from '~/constants'
import { AUTH_ROUTES as ROUTES } from '~/constants'
import { useRegisterUserMutation } from '~/generated/graphql'
import { extractServerError } from '~/lib/hooks'
import { useRegister } from '~/lib/hooks'
import { useNotify } from '~/lib/hooks'

import { TAuthScreens } from '../Auth'

import { SignUpView, Values } from './SignUpView'

interface Props {
  navigation: StackNavigationProp<TAuthScreens, ROUTES.SignUp>
}

export const SignUp = ({ navigation: { navigate } }: Props) => {
  const signInNavigation = useCallback(() => navigate(ROUTES.SignIn), [navigate])

  const [addUser] = useRegisterUserMutation()
  const { login } = useRegister()
  const notify = useNotify()

  const onSubmit = async (values: Values, { setFieldError }) => {
    try {
      const { data } = await addUser({ variables: values })
      if (data) {
        await AsyncStorage.setItem(StorageKeys.Token, data.register.token)
        login(data.register)
      }
    } catch (err) {
      const [fieldError, messageError] = extractServerError(err)
      if (fieldError && messageError) setFieldError(fieldError, messageError)
      else notify.error(err)
    }
  }

  return <SignUpView signInNavigation={signInNavigation} onSubmit={onSubmit} />
}
