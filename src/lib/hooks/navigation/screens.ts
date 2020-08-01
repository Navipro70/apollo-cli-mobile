import { TBottomScreens } from "../../../modules/App/Tabs";
import { TAuthScreens } from "../../../modules/Auth/Auth";
import { TAppScreens } from "../../../modules/App/App";
import { THomeStacks } from "../../../modules/App/Home";

export type Screens = TBottomScreens & TAuthScreens & TAppScreens & THomeStacks;

export type Routes = keyof Screens;
