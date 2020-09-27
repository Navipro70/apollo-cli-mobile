import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'

import { BOTTOM_ROUTES as ROUTES } from '~/constants/routes'
import { tabBarOptions } from '~/styles'

import { Posts } from '../Posts/Posts'
import { Profile } from '../Profile/Profile'

export type TBottomScreens = {
  [ROUTES.Posts]: undefined
  [ROUTES.Profile]: undefined
}

const { Navigator, Screen } = createBottomTabNavigator<TBottomScreens>()

export const Tabs = () => (
  <Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName: string = 'home'
        if (route.name === 'Home') iconName = 'home'
        else if (route.name === 'Profile') iconName = 'profile'
        return <Icon color={color} name={iconName} size={size} />
      },
    })}
    tabBarOptions={tabBarOptions}
  >
    <Screen component={Posts} name={ROUTES.Posts} />
    <Screen component={Profile} name={ROUTES.Profile} />
  </Navigator>
)
