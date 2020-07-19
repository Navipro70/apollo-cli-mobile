import React, {FC} from 'react'
import {View, Button} from "react-native";
import {commonStyles} from "../../styles";

import {StackNavigationProp} from '@react-navigation/stack';
import {TAuthScreens} from "../../../App";
import {AUTH_ROUTES} from "../../constants/routes";

type ProfileScreenNavigationProp = StackNavigationProp<TAuthScreens,
    AUTH_ROUTES.SignUp>;

type TProps = {
    navigation: ProfileScreenNavigationProp;
};

export const SignUp: FC<TProps> = ({navigation}) => {
    return (
        <View style={commonStyles.view}>
            <Button title="Already have an account? Sign In!" onPress={() => navigation.navigate(AUTH_ROUTES.SignIn)}/>
        </View>
    )
}
