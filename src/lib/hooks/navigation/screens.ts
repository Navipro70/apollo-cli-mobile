import { TAppScreens } from '~/modules/App/App'
import { THomeStacks } from '~/modules/App/Home'
import { TBottomScreens } from '~/modules/App/Tabs'
import { TAuthScreens } from '~/modules/Auth/Auth'

export type Screens = TBottomScreens & TAuthScreens & TAppScreens & THomeStacks

export type Routes = keyof Screens
