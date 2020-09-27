import { FormikHelpers } from 'formik'

import { AuthReducer } from './constants'
import { MutationLoginArgs, RegisterInput, User } from './generated/graphql'

//Formik
export type FormikOnSubmit<T> = (values: T, formikHelpers: FormikHelpers<T>) => void | Promise<any>

export type TSignUpFormik = FormikOnSubmit<RegisterInput>
export type TSignInFormik = FormikOnSubmit<MutationLoginArgs>

//useCurrentUser hook
export type TAuthReducer = { type: AuthReducer.Login; payload: User } | { type: AuthReducer.Logout }
