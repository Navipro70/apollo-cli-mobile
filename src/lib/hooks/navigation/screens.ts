import {TBottomScreens} from "../../../modules/App/Tabs";
import {TAuthScreens} from "../../../modules/Auth/Auth";


export type Screens = TBottomScreens &
    TAuthScreens

export type Routes = keyof Screens
