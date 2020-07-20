import React, {FC} from "react";
import {Button, View} from "react-native-ui-lib";
import {BOTTOM_ROUTES} from "../../constants/routes";
import {StackNavigationProp} from "@react-navigation/stack";
import {TBottomScreens} from "../App/App";
import {SafeAreaView} from "react-native-safe-area-context";

type BottomScreensProp = StackNavigationProp<TBottomScreens,
    BOTTOM_ROUTES.Profile>;

type TProps = {
    navigation: BottomScreensProp;
};

export const Profile: FC<TProps> = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View flex center>
                <Button
                    label="Hello Profile"
                    onPress={() => navigation.navigate(BOTTOM_ROUTES.Home)}
                />
            </View>
        </SafeAreaView>
    )
}
