import * as RNLocalize from 'react-native-localize'

import { data } from './en/data'

export const getLang = () => {
  const lang = RNLocalize.findBestAvailableLanguage(['en']) ?? null
  const languageTag = lang?.languageTag ?? 'en'

  return languageTag
}

export const i18n = () => {
  const lang = getLang()
  return data[lang].data
}

export type Data = typeof data
