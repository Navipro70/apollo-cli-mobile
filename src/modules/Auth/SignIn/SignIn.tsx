import AsyncStorage from '@react-native-community/async-storage'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useCallback, useState } from 'react'

import { StorageKeys } from '~/constants/constants'
import { AUTH_ROUTES as ROUTES } from '~/constants/routes'
import { useLoginUserMutation } from '~/generated/graphql'
import { useCurrentUser } from '~/lib/hooks/useCurrentUser'
import { useNotify } from '~/lib/hooks/useNotify/useNotify'
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
  const user = useCurrentUser()
  const [generalError, setGeneralError] = useState('')

  const onSubmit: TSignInFormik = async (values) => {
    setGeneralError('')
    try {
      const { data } = await loginUser({
        variables: values,
      })
      if (data) {
        await AsyncStorage.setItem(StorageKeys.Token, data.login.token)
        user.login(data.login)
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
