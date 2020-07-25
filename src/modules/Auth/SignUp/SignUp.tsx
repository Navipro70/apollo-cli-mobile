import React from 'react'
import {View, Button} from "react-native"
import {commonStyles} from "../../../styles"
import {AUTH_ROUTES} from "../../../constants/routes"
import {useNavigation} from "../../../lib/hooks/navigation/useNavigation"

export const SignUp = () => {
    const navigation = useNavigation()
    return (
        <View style={commonStyles.view}>
            <Button title="Already have an account? Sign In!" onPress={() => navigation.navigate(AUTH_ROUTES.SignIn)}/>
        </View>
    )
}
