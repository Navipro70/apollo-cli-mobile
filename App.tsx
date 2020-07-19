import React, {FC} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {SignIn} from "./src/modules/AuthorizationStacks/SignIn/SignIn";
import {SignUp} from "./src/modules/AuthorizationStacks/SignUp";
import {AUTH_ROUTES as ROUTES} from './src/constants/routes'

export type TAuthScreens = {
    [ROUTES.SignIn]: undefined;
    [ROUTES.SignUp]: undefined
};

const Stack = createStackNavigator<TAuthScreens>()

export const App: FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name={ROUTES.SignIn} component={SignIn}/>
                <Stack.Screen name={ROUTES.SignUp} component={SignUp}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
