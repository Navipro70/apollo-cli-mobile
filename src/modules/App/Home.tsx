import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { HOME_ROUTES as ROUTES } from '../../constants/routes'

import { Tabs } from './Tabs'

export type THomeStacks = {
  [ROUTES.Tabs]: undefined
}

const Stack = createStackNavigator<THomeStacks>()

export const Home = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen component={Tabs} name={ROUTES.Tabs} />
    </Stack.Navigator>
  )
}
