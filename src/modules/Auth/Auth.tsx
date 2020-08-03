import { AUTH_ROUTES } from "../../constants/routes";
import { SignInView } from "./SignIn/SignInView";
import { SignUp } from "./SignUp/SignUp";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

export type TAuthScreens = {
  [AUTH_ROUTES.SignIn]: undefined;
  [AUTH_ROUTES.SignUp]: undefined;
};

const Stack = createStackNavigator<TAuthScreens>();

export const Auth = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={AUTH_ROUTES.SignIn} component={SignInView} />
    <Stack.Screen name={AUTH_ROUTES.SignUp} component={SignUp} />
  </Stack.Navigator>
);
