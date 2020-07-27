import React, {FC, useState} from 'react'
import {Providers} from "./Providers";
import {Auth} from "../Auth/Auth";
import {APP_ROUTES as ROUTES} from "../../constants/routes";
import {createStackNavigator} from "@react-navigation/stack";
import {Home} from "./Home";

export const App = () => {
    return (
        <Providers>
            <AppBase/>
        </Providers>
    )
}

export type TAppScreens = {
    [ROUTES.Auth]: undefined
    [ROUTES.Home]: undefined
}

const Stack = createStackNavigator<TAppScreens>()

const AppBase: FC = () => {
    const [authorized, setAuthorized] = useState(true)
    return (
        <Stack.Navigator headerMode="none" screenOptions={{animationEnabled: false}}>
            {authorized && <Stack.Screen name={ROUTES.Auth} component={Auth}/>}
            {!authorized && <Stack.Screen name={ROUTES.Home} component={Home}/>}
        </Stack.Navigator>
    )
}
