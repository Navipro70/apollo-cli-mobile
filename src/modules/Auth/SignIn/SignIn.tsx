import AsyncStorage from '@react-native-community/async-storage'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useCallback, useState } from 'react'

import { StorageKeys } from '~/constants'
import { AUTH_ROUTES as ROUTES } from '~/constants'
import { useLoginUserMutation } from '~/generated/graphql'
import { useRegister } from '~/lib/hooks'
import { useNotify } from '~/lib/hooks'
import { TSignInFormik } from '~/types'

import { TAuthScreens } from '../Auth'

import { SignInView } from './SignInView'

interface Props {
  navigation: StackNavigationProp<TAuthScreens, ROUTES.SignIn>
}

export const SingIn = ({ navigation: { navigate } }: Props) => {
  const signUpHandler = useCallback(() => navigate(ROUTES.SignUp), [navigate])

  const notify = useNotify()

  const [loginUser, { loading }] = useLoginUserMutation()
  const { login } = useRegister()
  const [generalError, setGeneralError] = useState('')

  const onSubmit: TSignInFormik = async (values) => {
    setGeneralError('')
    try {
      const { data } = await loginUser({
        variables: values,
      })
      if (data) {
        await AsyncStorage.setItem(StorageKeys.Token, data.login.token)
        login(data.login)
      }
    } catch (err) {
      notify.error(err)
    }
  }

  return (
    <SignInView
      generalError={generalError}
      loading={loading}
      signUpHandler={signUpHandler}
      onSubmit={onSubmit}
    />
  )
}
