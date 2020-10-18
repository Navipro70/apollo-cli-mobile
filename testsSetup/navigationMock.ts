import 'react-native-gesture-handler/jestSetup'

jest.mock('react-native-reanimated', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const Reanimated = require('react-native-reanimated/mock')

  Reanimated.default.call = () => {}

  return Reanimated
})

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')
