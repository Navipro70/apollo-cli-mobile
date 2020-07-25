import React, {useRef, useState} from 'react'
import {StyleSheet, TextInput, KeyboardAvoidingView,} from "react-native";
import {View, Text} from 'react-native-ui-lib'
import {commonStyles} from "../../../styles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StackNavigationProp} from "@react-navigation/stack";
import {AUTH_ROUTES} from "../../../constants/routes";
import {AppButton} from "../../../components/AppButton";
import {DismissKeyboard} from "../../../components/DissmissKeyboard";
import {useNavigation} from "../../../lib/hooks/navigation/useNavigation";

type themeColor = 'grey' | '#0190F9'

export const SignIn = () => {
    const passwordInputRef = useRef<TextInput>(null)

    const [securePassword, setSecurePassword] = useState<boolean>(true)
    const [emailColor, setEmailColor] = useState<themeColor>('grey')
    const [passwordColor, setPasswordColor] = useState<themeColor>('grey')

    const navigation = useNavigation()

    let iconName: string = securePassword ? 'eye-off-outline' : 'eye-outline'
    return (
        <DismissKeyboard>
            <KeyboardAvoidingView style={[commonStyles.view, styles.wrapper]} behavior='padding'>
                <View marginT-40 center>
                    <Text color='grey' style={styles.h3}>Good morning!</Text>
                    <Text color='#fff' marginT-20 style={styles.h1}>Welcome back.</Text>
                </View>
                <View center>
                    <View row bottom right>
                        <Icon
                            style={styles.inputIcon}
                            name='account-circle-outline'
                            size={35}
                            color={emailColor}
                        />
                        <TextInput
                            placeholderTextColor={emailColor}
                            style={{...styles.textInput, borderBottomColor: emailColor}}
                            placeholder='Email'
                            autoCompleteType='off'
                            onSubmitEditing={() => passwordInputRef.current!.focus()}
                            onFocus={setEmailColor.bind(null, '#0190F9')}
                            onBlur={(e) => {
                                if (e.nativeEvent.text === '') setEmailColor('grey')
                            }}
                        />
                    </View>
                    <View bottom right row>
                        <Icon
                            style={styles.inputIcon}
                            name='lock-outline'
                            size={35}
                            color={passwordColor}
                        />
                        <TextInput
                            ref={passwordInputRef}
                            placeholderTextColor='grey'
                            style={{...styles.textInput, borderBottomColor: passwordColor}}
                            placeholder='Password'
                            secureTextEntry={securePassword}
                            clearTextOnFocus={false}
                            accessible={false}
                            onFocus={setPasswordColor.bind(null, '#0190F9')}
                            onBlur={e => {
                                if (e.nativeEvent.text === '') setPasswordColor('grey')
                            }}
                        />
                        <Icon
                            style={styles.visibleIcon}
                            onPress={() => setSecurePassword((prevState) => !prevState)}
                            name={iconName}
                            size={30}
                            color={passwordColor}
                        />
                    </View>
                </View>
                <View center width={'100%'}>
                    <AppButton
                        extraStyles={styles.extraButtonStyle}
                        title="Login"
                        onPress={() => console.log('hello')}
                    />
                    <AppButton
                        extraStyles={{...styles.extraButtonStyle, ...styles.extraButtonSignUp}}
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
        justifyContent: 'space-around',
        backgroundColor: '#012B48'
    },
    h1: {fontSize: 40},
    h3: {fontSize: 24},
    inputIcon: {paddingRight: 15},
    textInput: {
        borderBottomWidth: 2,
        borderStyle: 'solid',
        width: '75%',
        padding: 5,
        paddingLeft: 0,
        paddingRight: 33,
        marginTop: 30,
        fontSize: 20,
        color: '#fff'
    },
    extraButtonStyle: {
        width: '80%',
        marginTop: 20,
        height: 60
    },
    extraButtonSignUp: {
        backgroundColor: '#012B48'
    },
    visibleIcon: {
        position: "absolute",
        paddingBottom: 5
    }
})
