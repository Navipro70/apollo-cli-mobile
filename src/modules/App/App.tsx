import React, {FC, useState} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {SignIn} from "../AuthorizationStacks/SignIn/SignIn";
import {SignUp} from "../AuthorizationStacks/SignUp/SignUp";
import {AUTH_ROUTES, BOTTOM_ROUTES} from '../../constants/routes'
import {Providers} from "./Providers";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Home} from "../Home/Home";
import {Profile} from "../Profile/Profile";
import Icon from 'react-native-vector-icons/AntDesign'

export type TAuthScreens = {
    [AUTH_ROUTES.SignIn]: undefined;
    [AUTH_ROUTES.SignUp]: undefined
};

export type TBottomScreens = {
    [BOTTOM_ROUTES.Home]: undefined;
    [BOTTOM_ROUTES.Profile]: undefined
}


const Stack = createStackNavigator<TAuthScreens>()
const BottomTab = createBottomTabNavigator<TBottomScreens>()

export const App = () => {
    return (
        <Providers>
            <AppBase/>
        </Providers>
    )
}

const AppBase: FC = () => {
    const [authorized, setAuthorized] = useState(false)
    return (
        <>
            {authorized && <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name={AUTH_ROUTES.SignIn} component={SignIn}/>
                <Stack.Screen name={AUTH_ROUTES.SignUp} component={SignUp}/>
            </Stack.Navigator>}
            {!authorized && <BottomTab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName: string = 'home'
                        if (route.name === 'Home') iconName = 'home'
                        else if (route.name === 'Profile') iconName = 'profile'
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray'
                }}
            >
                <BottomTab.Screen name={BOTTOM_ROUTES.Home} component={Home}/>
                <BottomTab.Screen name={BOTTOM_ROUTES.Profile} component={Profile}/>
            </BottomTab.Navigator>}
        </>
    )
}
