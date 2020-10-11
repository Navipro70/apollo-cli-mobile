import { BottomTabBarOptions } from '@react-navigation/bottom-tabs'
import { Colors, Typography } from 'react-native-ui-lib'

export const colors = {
  white: '#ffffff',
  black: '#000000',
  pink: '#FF123D',
  gray: '#9E9E9E' as const,
  backgroundGray: '#EFEFF4',
  backgroundLightGray: '#EDEDED',
  borderGray: '#E2E2E2',
  red: '#f14a4a',
  lightGray: '#E1E1E1',
  overlayDark: 'rgba(0,0,0,.5)',
  transparent: 'transparent',
  darkGray: '#505050',
  green: '#4CD964',
  aqua: '#0190F9' as const,
  backgroundAqua: '#012B48',
}

Colors.loadColors(colors)

Typography.loadTypographies({
  h1: {
    fontSize: 36,
    lineHeight: 42,
    fontFamily: 'FlowExt-Bold',
  },
  h1Light: {
    fontSize: 36,
    lineHeight: 42,
    letterSpacing: 0.2,
    fontFamily: 'FlowExt-Bold',
  },
  h2: { fontSize: 30, fontFamily: 'FlowExt-Bold' },
  h3: { fontSize: 26, fontFamily: 'FlowExt' },
  h4: { fontSize: 22, fontFamily: 'FlowExt' },
  h4Normal: { fontSize: 22, fontFamily: 'FlowExt' },
  h5: { fontSize: 20, fontFamily: 'FlowExt' },
  subtitle: { fontSize: 18, fontFamily: 'FlowExt' },
  default: { fontSize: 16, fontFamily: 'FlowExt' },
  small: { fontSize: 14, fontFamily: 'FlowExt' },
  extraSmall: { fontSize: 12, fontFamily: 'FlowExt' },

  medium: { fontFamily: 'SFProDisplay-Medium' },
  semibold: { fontFamily: 'SFProDisplay-Semibold' },

  lowercase: { textTransform: 'lowercase' },
  uppercase: { textTransform: 'uppercase' },
})

export const tabBarOptions: BottomTabBarOptions = {
  activeTintColor: colors.pink,
  inactiveTintColor: colors.black,
  style: {
    backgroundColor: colors.white,
  },
  showLabel: false,
}
