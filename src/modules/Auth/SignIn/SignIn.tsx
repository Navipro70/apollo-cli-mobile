import React from 'react'
import {StyleSheet, KeyboardAvoidingView} from "react-native";
import {View, Text} from 'react-native-ui-lib'
import {colors, commonStyles} from "../../../styles";
import {AUTH_ROUTES} from "../../../constants/routes";
import {AppButton} from "../../../components/AppButton";
import {DismissKeyboard} from "../../../components/DissmissKeyboard";
import {useNavigation} from "../../../lib/hooks/navigation/useNavigation";
import {Input} from "../../../components/Input";

const {gray, aqua} = colors

export const SignIn = () => {
    const navigation = useNavigation()
    return (
        <DismissKeyboard>
            <KeyboardAvoidingView style={[commonStyles.view, styles.wrapper]} behavior='padding'>
                <View marginT-40 center flexG-2>
                    <Text color={gray} style={styles.h3} children='Good morning!' />
                    <Text color='#fff' marginT-20 style={styles.h1} children='Welcome back.'/>
                </View>
                <View center flexG-3>
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
                <View center width='100%' flexG-2>
                    <AppButton
                        style={styles.extraButtonStyle}
                        title="Login"
                        onPress={() => console.log('hello')}
                    />
                    <AppButton
                        style={{...styles.extraButtonStyle, ...styles.extraButton}}
                        title="SignUp"
                        onPress={() => navigation.navigate(AUTH_ROUTES.SignUp)}
                    />
                </View>
            </KeyboardAvoidingView>
        </DismissKeyboard>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: colors.backgroundAqua
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
