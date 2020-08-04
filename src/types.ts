import { FormikHelpers } from "formik";
import { MutationLoginArgs, RegisterInput } from "./generated/graphql";

export type FormikOnSubmit<T> = (
  values: T,
  formikHelpers: FormikHelpers<T>
) => void | Promise<any>;

export type TSignUpFormik = FormikOnSubmit<RegisterInput>;

export type TSignInFormik = FormikOnSubmit<MutationLoginArgs>;
