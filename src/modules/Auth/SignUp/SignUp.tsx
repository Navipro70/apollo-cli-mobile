import { SignUpView } from "./SignUpView";
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { TAuthScreens } from "../Auth";
import { AUTH_ROUTES as ROUTES } from "../../../constants/routes";
import {
  RegisterInput,
  useRegisterUserMutation,
} from "../../../generated/graphql";
import { extractServerError } from "../../../lib/hooks/extractServerGraphQLError";
import { FormikHelpers } from "formik/dist/types";

interface Props {
  navigation: StackNavigationProp<TAuthScreens, ROUTES.SignUp>;
}

export const SignUp = ({ navigation }: Props) => {
  const signInHandler = () => navigation.navigate(ROUTES.SignIn);
  const [addUser, { loading }] = useRegisterUserMutation();
  const onSubmit = async (
    values: RegisterInput,
    formikBag: FormikHelpers<RegisterInput>
  ) => {
    try {
      const data = await addUser({
        variables: values,
      });
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
