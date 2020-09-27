import { StackNavigationProp } from '@react-navigation/stack'
import React, { FC, useCallback } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, Text } from 'react-native-ui-lib'

import { BOTTOM_ROUTES, BOTTOM_ROUTES as ROUTES } from '~/constants'
import { useRegister } from '~/lib/hooks'
import { useCurrentUser } from '~/lib/hooks'

import { TBottomScreens } from '../App/Tabs'

interface Props {
  navigation: StackNavigationProp<TBottomScreens, BOTTOM_ROUTES.Profile>
}

export const Profile: FC<Props> = ({ navigation: { navigate } }) => {
  const { logout } = useRegister()
  const user = useCurrentUser()
  const navigateToPosts = useCallback(() => navigate(ROUTES.Posts), [navigate])
  return (
    <SafeAreaView style={styles.containter}>
      <Text children={user.email} />
      <Text children={user.createdAt} />
      <Text children={user.username} />
      <Text children={user.id} />
      <Button label="Hello Profile" onPress={navigateToPosts} />
      <Button label="Logout" onPress={logout} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
