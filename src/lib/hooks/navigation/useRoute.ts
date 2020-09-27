// eslint-disable-next-line no-restricted-imports
import { useRoute as useUntypedRoute, RouteProp } from '@react-navigation/native'

import { Screens, Routes } from './screens'

export const useRoute = <T extends Routes>() => {
  const { params, ...rest } = useUntypedRoute<RouteProp<Screens, Routes>>()
  return { ...rest, params: params as Screens[T] }
}
