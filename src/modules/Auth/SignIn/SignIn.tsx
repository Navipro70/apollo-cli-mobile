import React, { useState } from "react";
import { SignInView } from "./SignInView";
import { StackNavigationProp } from "@react-navigation/stack";
import { TAuthScreens } from "../Auth";
import { AUTH_ROUTES as ROUTES } from "../../../constants/routes";
import { useLoginUserMutation } from "../../../generated/graphql";
import { extractServerError } from "../../../lib/hooks/extractServerGraphQLError";
import { TSignInFormik } from "../../../types";
import { SignUpView } from "../SignUp/SignUpView";

interface Props {
  navigation: StackNavigationProp<TAuthScreens, ROUTES.SignIn>;
}

export const SingIn = ({ navigation }: Props) => {
  const signUpHandler = () => navigation.navigate(ROUTES.SignUp);

  const [loginUser, { loading }] = useLoginUserMutation();
  const [generalError, setGeneralError] = useState("");

  const onSubmit: TSignInFormik = async (values, formikBag) => {
    setGeneralError("");
    try {
      await loginUser({
        variables: values,
      });
    } catch (err) {
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
