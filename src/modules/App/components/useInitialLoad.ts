import AsyncStorage from '@react-native-community/async-storage'
import jwtDecode from 'jwt-decode'
import { useCallback, useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'

import { StorageKeys } from '~/constants'
import { userContextState } from '~/lib/hooks'

export const useInitialLoad = () => {
  const userData = userContextState()

  const initialLoad = useCallback(async () => {
    const token = await AsyncStorage.getItem(StorageKeys.Token)
    if (token) userData.login(jwtDecode(token))
    SplashScreen.hide()
  }, [userData])

  useEffect(() => void initialLoad(), [initialLoad])

  return userData
}
