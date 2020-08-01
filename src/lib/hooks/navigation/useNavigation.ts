import {
  useNavigation as useUntypedNavigation,
  NavigationProp,
} from "@react-navigation/native";

import { Screens, Routes } from "./screens";

export const useNavigation = () => {
  return useUntypedNavigation<NavigationProp<Screens, Routes>>();
};
