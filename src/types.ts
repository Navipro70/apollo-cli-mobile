import { AuthReducer } from './constants'
import { User } from './generated/graphql'

//useCurrentUser hook
export type TAuthReducer = { type: AuthReducer.Login; payload: User } | { type: AuthReducer.Logout }
