import { SignUpView } from './SignUpView'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { TAuthScreens } from '../Auth'
import { AUTH_ROUTES as ROUTES } from '../../../constants/routes'
import { useRegisterUserMutation } from '../../../generated/graphql'
import { extractServerError } from '../../../lib/hooks/extractServerGraphQLError'
import { TSignUpFormik } from '../../../types'
import { useCurrentUser } from '../../../lib/hooks/useCurrentUser'
import { StorageKeys } from '../../../constants/constants'
import AsyncStorage from '@react-native-community/async-storage'
import { useNotify } from '../../../lib/hooks/useNotify/useNotify'

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

  return <SignUpView signInHandler={signInHandler} loading={loading} onSubmit={onSubmit} />
}
