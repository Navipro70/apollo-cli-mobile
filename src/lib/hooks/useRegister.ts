/* eslint-disable react-hooks/rules-of-hooks */
import AsyncStorage from '@react-native-community/async-storage'
import React, { useContext, useReducer, useCallback } from 'react'

import { StorageKeys, AuthReducer } from '~/constants'
import { User } from '~/generated/graphql'
import { TAuthReducer } from '~/types'

interface IContext {
  user: User | null
  login: (userData: User) => void
  logout: () => void
}

type IAuthState = { user: User | null }

export const UserContext = React.createContext<IContext>({
  user: null,
  login: (_data) => {},
  logout: () => {},
})

export const useRegister = () => {
  const value = useContext(UserContext)

  if (!value) {
    throw new Error('useRegister can only be used inside a CurrentUserProvider')
  }

  return value
}

const authReducer = (state: IAuthState, action: TAuthReducer) => {
  switch (action.type) {
    case AuthReducer.Login:
      return {
        ...state,
        user: action.payload,
      }
    case AuthReducer.Logout:
      return {
        ...state,
        user: null,
      }
    default:
      return state
  }
}

export const userContextState = (): IContext => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, dispatch] = useReducer(authReducer, { user: null })
  const login = useCallback(
    (userData: User) =>
      dispatch({
        type: AuthReducer.Login,
        payload: userData,
      }),
    [dispatch],
  )

  const logout = useCallback(async () => {
    await AsyncStorage.removeItem(StorageKeys.Token)
    dispatch({
      type: AuthReducer.Logout,
    })
  }, [dispatch])

  return {
    login,
    logout,
    user: state.user,
  }
}
