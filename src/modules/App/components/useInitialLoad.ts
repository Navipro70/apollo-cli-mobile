import { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import AsyncStorage from "@react-native-community/async-storage";
import jwtDecode from "jwt-decode";

import { StorageKeys } from "../../../constants/constants";
import { userContextState } from "../../../lib/hooks/useCurrentUser";

export const useInitialLoad = () => {
  const userData = userContextState({ user: null });
  const initialLoad = async () => {
    const token = await AsyncStorage.getItem(StorageKeys.Token);
    userData.login(jwtDecode(token));
    SplashScreen.hide();
  };
  useEffect(() => void initialLoad(), []);
  return userData;
};
