import {StyleSheet} from 'react-native'
import { BottomTabBarOptions } from '@react-navigation/bottom-tabs'
import { Colors } from 'react-native-ui-lib'

export const commonStyles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export const colors = {
    white: '#ffffff',
    black: '#000000',
    pink: '#FF123D',
    gray: '#9E9E9E',
    backgroundGray: '#EFEFF4',
    backgroundLightGray: '#EDEDED',
    borderGray: '#E2E2E2',
    red: '#f14a4a',
    lightGray: '#E1E1E1',
    overlayDark: 'rgba(0,0,0,.5)',
    transparent: 'transparent',
    darkGray: '#505050',
    green: '#4CD964',
}

Colors.loadColors(colors)

export const tabBarOptions: BottomTabBarOptions = {
    activeTintColor: colors.pink,
    inactiveTintColor: colors.black,
    style: {
        backgroundColor: colors.white,
    },
    showLabel: false,
}
