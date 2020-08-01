import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HOME_ROUTES as ROUTES } from "../../constants/routes";
import { Tabs } from "./Tabs";

export type THomeStacks = {
  [ROUTES.Tabs]: undefined;
};

const Stack = createStackNavigator<THomeStacks>();

export const Home = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={ROUTES.Tabs} component={Tabs} />
    </Stack.Navigator>
  );
};
