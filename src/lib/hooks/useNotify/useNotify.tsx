import React, { createContext, useCallback, useContext, useRef, useState } from 'react'

import { SNACKBAR_ANIMATION_OUT_TIMING, AppNotification, Snackbar } from '~/components/Snackbar'
import { i18n } from '~/i18n'

import { extractGraphQLError } from '../extractGraphQLError'

type Context = {
  error: (error: any, text?: string) => void
}

const Context = createContext<Context>(null as never)

const ERROR_TIME_OPEN = 4000

const wait = async (ms: number) => new Promise((r) => setTimeout(r, ms))

export const useNotify = () => {
  const value = useContext(Context)

  if (!value) {
    throw new Error('useNotify can only be used inside a NotificationsProvider')
  }

  return value
}
const { internetConnection, unexpected } = i18n().notify
export const NotificationsProvider: React.FC = ({ children }) => {
  const [notification, setNotification] = useState<null | AppNotification>(null)
  const promiseRef = useRef<Promise<unknown>>(Promise.resolve())

  const show = (value: AppNotification, timeout: number) => {
    promiseRef.current = promiseRef.current.then(async () => {
      setNotification(value)
      await wait(timeout)

      setNotification(null)
      await wait(SNACKBAR_ANIMATION_OUT_TIMING)
    })
  }

  const error = (error: any, text?: string) => {
    const snackbarNotification = {
      show: true,
      text:
        text ??
        extractGraphQLError(error) ??
        error.message === 'Network error: Network request failed'
          ? internetConnection
          : unexpected,
    }

    show(snackbarNotification, ERROR_TIME_OPEN)
  }

  const hide = useCallback(() => setNotification(null), [])

  return (
    <Context.Provider value={{ error }}>
      <Snackbar notification={notification} onClose={hide} />
      {children}
    </Context.Provider>
  )
}
