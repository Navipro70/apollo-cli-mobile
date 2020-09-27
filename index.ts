import { AppRegistry } from 'react-native'

import { name as appName } from './app.json'
import { App } from './src/modules/App'

AppRegistry.registerComponent(appName, () => App)