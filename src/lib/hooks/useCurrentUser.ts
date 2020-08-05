import React, { useContext, useReducer } from "react";
import { User } from "../../generated/graphql";
import { TAuthReducer } from "../../types";

interface IContext {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

interface IAuthState {
  user: User | null;
}

export const UserContext = React.createContext<IContext>({
  user: null,
  login: (data) => {},
  logout: () => {},
});

export const useCurrentUser = () => {
  const value = useContext(UserContext);

  if (value === undefined) {
    throw new Error(
      "useCurrentUser can only be used inside a CurrentUserProvider"
    );
  }

  return value;
};

function authReducer(state: IAuthState, action: TAuthReducer) {
  switch (action.type) {
    case AuthReducer.Login:
      return {
        ...state,
        user: action.payload,
      };
    case AuthReducer.Logout:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

export function userContextState(): IContext {
  const [state, dispatch] = useReducer(authReducer, { user: null });
  function login(userData: User) {
    dispatch({
      type: AuthReducer.Login,
      payload: userData,
    });
  }

  function logout() {
    dispatch({
      type: AuthReducer.Logout,
    });
  }

  return {
    login,
    logout,
    user: state.user,
  };
}
