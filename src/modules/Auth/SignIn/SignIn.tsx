import React, { useState } from "react";
import { SignInView } from "./SignInView";
import { StackNavigationProp } from "@react-navigation/stack";
import { TAuthScreens } from "../Auth";
import { AUTH_ROUTES as ROUTES } from "../../../constants/routes";
import { useLoginUserMutation, User } from "../../../generated/graphql";
import { extractServerError } from "../../../lib/hooks/extractServerGraphQLError";
import { TSignInFormik } from "../../../types";
import { useCurrentUser } from "../../../lib/hooks/useCurrentUser";

interface Props {
  navigation: StackNavigationProp<TAuthScreens, ROUTES.SignIn>;
}

export const SingIn = ({ navigation }: Props) => {
  const signUpHandler = () => navigation.navigate(ROUTES.SignUp);

  const [loginUser, { loading }] = useLoginUserMutation();
  const { login } = useCurrentUser();
  const [generalError, setGeneralError] = useState("");

  const onSubmit: TSignInFormik = async (values) => {
    setGeneralError("");
    try {
      const { data } = await loginUser({
        variables: values,
      });
      login(data?.login as User);
    } catch (err) {
      console.log(err);
      const [_, messageError] = extractServerError(err);
      setGeneralError(messageError as string);
    }
  };

  return (
    <SignInView
      onSubmit={onSubmit}
      signUpHandler={signUpHandler}
      loading={loading}
      generalError={generalError}
    />
  );
};
