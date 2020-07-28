import React from 'react'
import {StyleSheet} from "react-native";
import {View, Text} from 'react-native-ui-lib'
import {colors, commonStyles} from "../../../styles";
import {AUTH_ROUTES as ROUTES} from "../../../constants/routes";
import {AppButton} from "../../../components/AppButton";
import {DismissKeyboard} from "../../../components/DissmissKeyboard";
import {Input} from "../../../components/Input";
import {SafeAreaView} from "react-native-safe-area-context";
import {StackNavigationProp} from "@react-navigation/stack";
import {TAuthScreens} from "../Auth";

type ProfileScreenNavigationProp = StackNavigationProp<TAuthScreens, ROUTES.SignIn>;

interface Props {
    navigation: ProfileScreenNavigationProp;
}

const {gray, aqua} = colors

export const SignInView = ({navigation}: Props) => {
    return (
        <DismissKeyboard>
            <SafeAreaView style={[commonStyles.view, styles.wrapper]}>
                <View marginT-40 center>
                    <Text color={gray} style={styles.h3} children='Good morning!'/>
                    <Text color='#fff' marginT-20 style={styles.h1} children='Welcome back.'/>
                </View>
                <View center>
                    <Input
                        inputIcon='account-circle-outline'
                        color={aqua}
                        style={styles.textInput}
                        placeholder='Email'
                        autoCompleteType='off'
                        value={''}
                        onChangeText={() => {
                        }}
                    />
                    <Input
                        style={styles.textInput}
                        placeholder='Password'
                        secure
                        inputIcon='lock-outline'
                        color={aqua}
                        value={''}
                        onChangeText={() => {
                        }}
                    />
                </View>
                <View center width='100%' marginB-10>
                    <AppButton
                        style={styles.extraButtonStyle}
                        title="Login"
                        onPress={() => console.log('hello')}
                    />
                    <AppButton
                        style={{...styles.extraButtonStyle, ...styles.extraButton}}
                        title="SignUp"
                        onPress={() => navigation.navigate(ROUTES.SignUp)}
                    />
                </View>
            </SafeAreaView>
        </DismissKeyboard>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: colors.backgroundAqua,
        justifyContent: 'space-between'
    },
    h1: {
        fontSize: 40
    },
    h3: {
        fontSize: 24
    },
    textInput: {
        width: '75%',
    },
    extraButtonStyle: {
        width: '80%',
        marginTop: 20,
    },
    extraButton: {
        backgroundColor: colors.backgroundAqua
    }
})
