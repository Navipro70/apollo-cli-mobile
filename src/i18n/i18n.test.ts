import { data } from './en/data'
import { getLang, i18n } from './i18n'

describe('Test i18n functions', () => {
  it('Test getLang function', () => {
    expect(getLang()).toEqual('en' || 'ru')
  })

  it('Test i18n function', () => {
    expect(i18n()).toEqual(data)
  })
})
