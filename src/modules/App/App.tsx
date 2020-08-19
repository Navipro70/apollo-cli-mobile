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

const AppBase: FC = () => {
  const data = userContextState();
  const [valueData, setValueData] = useState("loading");

  const initialLoad = async () => {
    const token = await AsyncStorage.getItem(StorageKeys.Token);
    setValueData({ ...data, user: jwtDecode(token) });
  };
  useEffect(() => void initialLoad(), []);
  //   valueData ? (
  //   <View flex-1 center>
  //     <Text>loading...</Text>
  //   </View>
  // ) :
  if (valueData === "loading")
    return (
      <View center flex>
        <Text children="loading..." />
      </View>
    );
  return (
    <UserContext.Provider value={valueData}>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{ animationEnabled: false }}
      >
        {!valueData.user && (
          <Stack.Screen name={ROUTES.Auth} component={Auth} />
        )}
        {valueData.user && <Stack.Screen name={ROUTES.Home} component={Home} />}
      </Stack.Navigator>
    </UserContext.Provider>
  );
};
