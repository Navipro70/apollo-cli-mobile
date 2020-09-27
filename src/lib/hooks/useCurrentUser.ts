import { User } from '~/generated/graphql'

import { useRegister } from './useRegister'

export const useCurrentUser = (): User => {
  const { user } = useRegister()

  if (!user) throw new Error("You can't useCurrentUser inside HomeStack")

  return user as User
}
