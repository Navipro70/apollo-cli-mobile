import * as RNLocalize from 'react-native-localize'

import { data as en } from './en/data'
const data = { en }
const getLang = () => {
  const lang = RNLocalize.findBestAvailableLanguage(['en']) ?? null
  const languageTag = lang?.languageTag ?? 'en'

  return languageTag
}

export const i18n = () => {
  const lang = getLang()
  return data[lang]
}
