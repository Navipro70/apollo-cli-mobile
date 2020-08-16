import { SignUpView } from "./SignUpView";
import React, { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { TAuthScreens } from "../Auth";
import { AUTH_ROUTES as ROUTES } from "../../../constants/routes";
import { User, useRegisterUserMutation } from "../../../generated/graphql";
import { extractServerError } from "../../../lib/hooks/extractServerGraphQLError";
import { TSignUpFormik } from "../../../types";
import { useCurrentUser } from "../../../lib/hooks/useCurrentUser";

interface Props {
  navigation: StackNavigationProp<TAuthScreens, ROUTES.SignUp>;
}

export const SignUp = ({ navigation }: Props) => {
  const signInHandler = () => navigation.navigate(ROUTES.SignIn);

  const [addUser, { loading }] = useRegisterUserMutation();
  const user = useCurrentUser();

  const onSubmit: TSignUpFormik = async (values, formikBag) => {
    try {
      const { data } = await addUser({
        variables: values,
      });
      if (data) user.login(data.register);
    } catch (err) {
      const [fieldError, messageError] = extractServerError(err);
      if (fieldError && messageError)
        formikBag.setFieldError(fieldError as string, messageError as string);
    }
  };

  return (
    <SignUpView
      signInHandler={signInHandler}
      loading={loading}
      onSubmit={onSubmit}
    />
  );
};
