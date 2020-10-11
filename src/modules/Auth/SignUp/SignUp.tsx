import AsyncStorage from '@react-native-community/async-storage'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useCallback, useMemo } from 'react'

import { StorageKeys } from '~/constants'
import { AUTH_ROUTES as ROUTES } from '~/constants'
import { useRegisterUserMutation } from '~/generated/graphql'
import { extractServerError } from '~/lib/hooks'
import { useRegister } from '~/lib/hooks'
import { useNotify } from '~/lib/hooks'
import { TSignUpFormik } from '~/types'

import { TAuthScreens } from '../Auth'

import { SignUpView } from './SignUpView'

interface Props {
  navigation: StackNavigationProp<TAuthScreens, ROUTES.SignUp>
}

export const SignUp = ({ navigation: { navigate } }: Props) => {
  const signInHandler = useCallback(() => navigate(ROUTES.SignIn), [navigate])

  const notify = useMemo(useNotify, [])

  const [addUser] = useRegisterUserMutation()
  const { login } = useMemo(useRegister, [])

  const onSubmit: TSignUpFormik = async (values, formikBag) => {
    try {
      const { data } = await addUser({ variables: values })
      if (data) {
        await AsyncStorage.setItem(StorageKeys.Token, data.register.token)
        login(data.register)
      }
    } catch (err) {
      const [fieldError, messageError] = extractServerError(err)
      if (fieldError && messageError) formikBag.setFieldError(fieldError, messageError)
      else notify.error(err)
    }
  }

  return <SignUpView signInHandler={signInHandler} onSubmit={onSubmit} />
}
