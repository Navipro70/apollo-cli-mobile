import AsyncStorage from '@react-native-community/async-storage'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useCallback } from 'react'

import { StorageKeys } from '~/constants'
import { AUTH_ROUTES as ROUTES } from '~/constants'
import { useLoginUserMutation } from '~/generated/graphql'
import { useRegister } from '~/lib/hooks'
import { useNotify } from '~/lib/hooks'

import { TAuthScreens } from '../Auth'

import { SignInView, Values } from './SignInView'

interface Props {
  navigation: StackNavigationProp<TAuthScreens, ROUTES.SignIn>
}

export const SingIn = ({ navigation: { navigate } }: Props) => {
  const signUpNavigation = useCallback(() => navigate(ROUTES.SignUp), [navigate])

  const [loginUser] = useLoginUserMutation()
  const { login } = useRegister()
  const notify = useNotify()

  const onSubmit = async (value: Values) => {
    try {
      const { data } = await loginUser({ variables: value })
      if (data) {
        await AsyncStorage.setItem(StorageKeys.Token, data.login.token)
        login(data.login)
      }
    } catch (err) {
      notify.error(err)
    }
  }

  return <SignInView signUpNavigation={signUpNavigation} onSubmit={onSubmit} />
}
