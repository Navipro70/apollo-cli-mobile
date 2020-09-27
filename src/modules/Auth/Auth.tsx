import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { AUTH_ROUTES } from '~/constants'

import { SingIn } from './SignIn'
import { SignUp } from './SignUp'

export type TAuthScreens = {
  [AUTH_ROUTES.SignIn]: undefined
  [AUTH_ROUTES.SignUp]: undefined
}

const Stack = createStackNavigator<TAuthScreens>()

export const Auth = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen component={SingIn} name={AUTH_ROUTES.SignIn} />
    <Stack.Screen component={SignUp} name={AUTH_ROUTES.SignUp} />
  </Stack.Navigator>
)
