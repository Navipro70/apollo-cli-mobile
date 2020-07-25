import React, {FC} from "react";
import {Button, View} from "react-native-ui-lib";
import {BOTTOM_ROUTES} from "../../constants/routes";
import {StackNavigationProp} from "@react-navigation/stack";
import {SafeAreaView} from "react-native-safe-area-context";
import {TBottomScreens} from "../App/Tabs";
import {useNavigation} from "../../lib/hooks/navigation/useNavigation";


export const Profile: FC = () => {
    const navigation = useNavigation()
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
