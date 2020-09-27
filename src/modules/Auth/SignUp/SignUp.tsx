import AsyncStorage from '@react-native-community/async-storage'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'

import { StorageKeys } from '../../../constants/constants'
import { AUTH_ROUTES as ROUTES } from '../../../constants/routes'
import { useRegisterUserMutation } from '../../../generated/graphql'
import { extractServerError } from '../../../lib/hooks/extractServerGraphQLError'
import { useCurrentUser } from '../../../lib/hooks/useCurrentUser'
import { useNotify } from '../../../lib/hooks/useNotify/useNotify'
import { TSignUpFormik } from '../../../types'
import { TAuthScreens } from '../Auth'

import { SignUpView } from './SignUpView'

interface Props {
  navigation: StackNavigationProp<TAuthScreens, ROUTES.SignUp>
}
//TODO fix error
export const SignUp = ({ navigation }: Props) => {
  const notify = useNotify()

  const [addUser, { loading }] = useRegisterUserMutation()
  const user = useCurrentUser()

  const onSubmit: TSignUpFormik = async (values, formikBag) => {
    try {
      const { data } = await addUser({
        variables: values,
      })
      if (data) {
        await AsyncStorage.setItem(StorageKeys.Token, data.register.token)
        user.login(data.register)
      }
    } catch (err) {
      notify.error(err)
      const [fieldError, messageError] = extractServerError(err)
      if (fieldError && messageError)
        formikBag.setFieldError(fieldError as string, messageError as string)
    }
  }

  const signInHandler = () => navigation.navigate(ROUTES.SignIn)

  return <SignUpView loading={loading} signInHandler={signInHandler} onSubmit={onSubmit} />
}
