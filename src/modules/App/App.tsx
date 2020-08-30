import React, { FC, useEffect, useState } from "react";
import { Providers } from "./Providers";
import { Auth } from "../Auth/Auth";
import { APP_ROUTES as ROUTES } from "../../constants/routes";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./Home";
import {
  useCurrentUser,
  UserContext,
  userContextState,
} from "../../lib/hooks/useCurrentUser";
import jwtDecode from "jwt-decode";
import AsyncStorage from "@react-native-community/async-storage";
import { StorageKeys } from "../../constants/constants";
import { View, Text } from "react-native-ui-lib";
import { colors } from "../../styles";

export const App = () => {
  return (
    <Providers>
      <AppBase />
    </Providers>
  );
};

export type TAppScreens = {
  [ROUTES.Auth]: undefined;
  [ROUTES.Home]: undefined;
};

const Stack = createStackNavigator<TAppScreens>();

//TODO fix types and make hook useInitialLoad && fix

const AppBase: FC = () => {
  const [dataToken, setDataToken] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);
  const data = userContextState({ user: dataToken });
  console.log(data, initialLoading);
  const initialLoad = async () => {
    const token = await AsyncStorage.getItem(StorageKeys.Token);
    setDataToken(token ? jwtDecode(token) : null);
    setInitialLoading(false);
  };
  useEffect(() => void initialLoad(), []);
  if (initialLoading)
    return <View center flex backgroundColor={colors.backgroundAqua} />;
  return (
    <UserContext.Provider value={data}>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{ animationEnabled: false }}
      >
        {!data.user && <Stack.Screen name={ROUTES.Auth} component={Auth} />}
        {data.user && <Stack.Screen name={ROUTES.Home} component={Home} />}
      </Stack.Navigator>
    </UserContext.Provider>
  );
};
