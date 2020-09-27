import { createStackNavigator } from '@react-navigation/stack'
import React, { FC } from 'react'

import { APP_ROUTES as ROUTES } from '~/constants'
import { UserContext } from '~/lib/hooks'

import { Auth } from '../Auth'

import { Home } from './Home'
import { Providers } from './Providers'
import { useInitialLoad } from './components'

export type TAppScreens = {
  [ROUTES.Auth]: undefined
  [ROUTES.Home]: undefined
}

export const App = () => (
  <Providers>
    <AppBase />
  </Providers>
)

const Stack = createStackNavigator<TAppScreens>()

const AppBase: FC = () => {
  const data = useInitialLoad()
  return (
    <UserContext.Provider value={data}>
      <Stack.Navigator headerMode="none" screenOptions={{ animationEnabled: false }}>
        {!data.user && <Stack.Screen component={Auth} name={ROUTES.Auth} />}
        {data.user && <Stack.Screen component={Home} name={ROUTES.Home} />}
      </Stack.Navigator>
    </UserContext.Provider>
  )
}
