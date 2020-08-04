import React from "react";
import { SignInView } from "./SignInView";
import { StackNavigationProp } from "@react-navigation/stack";
import { TAuthScreens } from "../Auth";
import { AUTH_ROUTES as ROUTES } from "../../../constants/routes";
import { useLoginUserMutation } from "../../../generated/graphql";
import { extractServerError } from "../../../lib/hooks/extractServerGraphQLError";
import { TSignInFormik } from "../../../types";

interface Props {
  navigation: StackNavigationProp<TAuthScreens, ROUTES.SignIn>;
}

export const SingIn = ({ navigation }: Props) => {
  const signUpHandler = () => navigation.navigate(ROUTES.SignUp);

  const [loginUser, { loading }] = useLoginUserMutation();

  const onSubmit: TSignInFormik = async (values, formikBag) => {
    try {
      loginUser({
        variables: values,
      });
    } catch (err) {
      const [fieldError, messageError] = extractServerError(err);
      if (fieldError && messageError)
        formikBag.setFieldError(fieldError as string, messageError as string);
    }
  };

  return (
    <SignInView
      onSubmit={onSubmit}
      signUpHandler={signUpHandler}
      loading={loading}
    />
  );
};
