import React, {FC, useRef, useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    KeyboardAvoidingView
} from "react-native";
import {commonStyles} from "../../../styles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {StackNavigationProp} from "@react-navigation/stack";
import {TAuthScreens} from "../../../../App";
import {AUTH_ROUTES} from "../../../constants/routes";
import {AppButton} from "../../../components/AppButton";

type ProfileScreenNavigationProp = StackNavigationProp<TAuthScreens,
    AUTH_ROUTES.SignIn>;

type TProps = {
    navigation: ProfileScreenNavigationProp;
};

type themeColor = 'grey' | '#0190F9'

export const SignIn: FC<TProps> = ({navigation}) => {
    const passwordInputRef = useRef<TextInput>(null)
    const [securePassword, setSecurePassword] = useState<boolean>(true)
    const [emailColor, setEmailColor] = useState<themeColor>('grey')
    const [passwordColor, setPasswordColor] = useState<themeColor>('grey')

    const handleLogin = () => console.log('LOGIN!')

    let iconName: string = securePassword ? 'eye-off-outline' : 'eye-outline'
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView style={[commonStyles.view, styles.wrapper]} behavior='padding'>
                <View style={styles.textBlock}>
                    <Text style={styles.h3}>Good morning!</Text>
                    <Text style={styles.h1}>Welcome back.</Text>
                </View>
                <View style={styles.inputViews}>
                    <View style={styles.iconInInputBlock}>
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
                    <View style={styles.iconInInputBlock}>
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
                            onSubmitEditing={handleLogin}
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
                <View style={styles.buttonBlock}>
                    <AppButton
                        extraStyles={styles.extraButtonStyle}
                        title="Login"
                        onPress={handleLogin}
                    />
                    <AppButton
                        extraStyles={{...styles.extraButtonStyle, ...styles.extraButtonSignUp}}
                        title="SignUp"
                        onPress={() => navigation.navigate(AUTH_ROUTES.SignUp)}
                    />
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'space-around',
        backgroundColor: '#012B48'
    },
    textBlock: {
        alignItems: 'center',
        marginTop: 40
    },
    h1: {
        fontSize: 40,
        color: '#fff',
        marginTop: 20
    },
    h3: {
        fontSize: 24,
        color: 'grey'
    },
    inputViews: {
        width: '100%',
        alignItems: 'center'
    },
    textInput: {
        borderBottomWidth: 2,
        borderStyle: 'solid',
        width: '75%',
        padding: 5,
        paddingLeft: 0,
        paddingRight: 33,
        marginTop: 30,
        fontSize: 24,
        color: '#fff'
    },
    buttonBlock: {
        width: '100%',
        alignItems: 'center'
    },
    extraButtonStyle: {
        width: '80%',
        marginTop: 20,
        height: 60
    },
    extraButtonSignUp: {
        backgroundColor: '#012B48'
    },
    iconInInputBlock: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        position: 'relative'
    },
    visibleIcon: {
        position: "absolute",
        paddingBottom: 5
    },
    inputIcon: {
        paddingRight: 15,
        paddingBottom: 1
    }
})
