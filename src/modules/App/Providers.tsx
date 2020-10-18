import { ApolloProvider } from '@apollo/react-hooks'
import { NavigationContainer } from '@react-navigation/native'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'
import React, { FC } from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import 'react-native-gesture-handler'
import { NotificationsProvider } from '~/lib/hooks'

const httpLink = createHttpLink({
  uri: 'http://localhost:5000',
  fetch,
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

export const Providers: FC = ({ children }) => (
  <SafeAreaProvider>
    <ApolloProvider client={client}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <NotificationsProvider>{children}</NotificationsProvider>
      </NavigationContainer>
    </ApolloProvider>
  </SafeAreaProvider>
)
