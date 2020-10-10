import * as yup from 'yup'

import { i18n } from '~/i18n'

yup.setLocale({
  mixed: {
    required: i18n().yup.required,
  },
  string: {
    min: i18n().yup.min,
    email: i18n().yup.email,
  },
})

export { object, array } from 'yup'
export const string = <T extends string>() => yup.string<T>().default('')
export const number = () => yup.number()
export const boolean = () => yup.boolean()
export const date = () => yup.date()
export const enumerate = <T extends string>(enumeration: Record<string, T>) =>
  string<T>().oneOf(Object.values(enumeration))
