import React, { FC } from "react";
import { Providers } from "./Providers";
import { Auth } from "../Auth/Auth";
import { APP_ROUTES as ROUTES } from "../../constants/routes";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./Home";
import { UserContext } from "../../lib/hooks/useCurrentUser";
import { useInitialLoad } from "./components/useInitialLoad";

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
  const data = useInitialLoad();
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
