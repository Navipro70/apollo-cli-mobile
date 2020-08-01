import Icon from "react-native-vector-icons/AntDesign";
import { BOTTOM_ROUTES as ROUTES } from "../../constants/routes";
import { Posts } from "../Posts/Posts";
import { Profile } from "../Profile/Profile";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { tabBarOptions } from "../../styles";

export type TBottomScreens = {
  [ROUTES.Posts]: undefined;
  [ROUTES.Profile]: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator<TBottomScreens>();

export const Tabs = () => {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: string = "home";
          if (route.name === "Home") iconName = "home";
          else if (route.name === "Profile") iconName = "profile";
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={tabBarOptions}
    >
      <Screen name={ROUTES.Posts} component={Posts} />
      <Screen name={ROUTES.Profile} component={Profile} />
    </Navigator>
  );
};
