import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { StatusBar } from "react-native";
import { createHttpLink } from "apollo-link-http";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NotificationsProvider } from "../../lib/hooks/useNotify/useNotify";

const httpLink = createHttpLink({
  uri: "http://localhost:5000",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export const Providers: React.FC = ({ children }) => {
  return (
    <SafeAreaProvider>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" />
          <NotificationsProvider>{children}</NotificationsProvider>
        </NavigationContainer>
      </ApolloProvider>
    </SafeAreaProvider>
  );
};
