import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { colors } from "../../../styles";
import { useFormik } from "formik";
import { Input } from "../../../components/Input";
import { signUpValidator } from "../../../constants/validatiors";
import { AppButton } from "../../../components/AppButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TSignUpFormik } from "../../../types";

interface Props {
  signInHandler: () => void;
  loading: boolean;
  onSubmit: TSignUpFormik;
}

export const SignUpView = ({ signInHandler, loading, onSubmit }: Props) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signUpValidator,
    onSubmit,
  });

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.wrapper}>
        <View center marginT-40>
          <Text style={styles.h1} children="Create your account" />
        </View>
        <View center>
          <Input
            value={formik.values.username}
            onChangeText={(text) => formik.setFieldValue("username", text)}
            onFocus={() => formik.setFieldTouched("username", false)}
            onBlur={() => formik.setFieldTouched("username", true)}
            error={formik.touched.username ? formik.errors.username : undefined}
            style={styles.input}
            maxLength={30}
            inputIcon="account-circle-outline"
            color={colors.aqua}
            placeholder="Username"
          />
          <Input
            value={formik.values.email}
            onChangeText={(text) => formik.setFieldValue("email", text)}
            onFocus={() => formik.setFieldTouched("email", false)}
            onBlur={() => formik.setFieldTouched("email", true)}
            error={formik.touched.email ? formik.errors.email : undefined}
            style={styles.input}
            maxLength={30}
            inputIcon="account-circle-outline"
            color={colors.aqua}
            placeholder="Email"
          />
          <Input
            value={formik.values.password}
            onChangeText={(text) => formik.setFieldValue("password", text)}
            onFocus={() => formik.setFieldTouched("password", false)}
            onBlur={() => formik.setFieldTouched("password", true)}
            error={formik.touched.password ? formik.errors.password : undefined}
            style={styles.input}
            maxLength={30}
            inputIcon="lock-outline"
            color={colors.aqua}
            placeholder="Password"
            secure
          />
          <Input
            value={formik.values.confirmPassword}
            onChangeText={(text) =>
              formik.setFieldValue("confirmPassword", text)
            }
            onBlur={() => formik.setFieldTouched("confirmPassword", true)}
            onFocus={() => formik.setFieldTouched("confirmPassword", false)}
            error={
              formik.touched.confirmPassword
                ? formik.errors.confirmPassword
                : undefined
            }
            style={styles.input}
            maxLength={30}
            inputIcon="lock-outline"
            color={colors.aqua}
            placeholder="Confirm password"
            onSubmitEditing={() => formik.handleSubmit()}
            secure
          />
        </View>
        <View center>
          <AppButton
            style={styles.button}
            title="Submit"
            onPress={formik.handleSubmit}
            loading={loading}
            spinnerStyle={styles.spinner}
          />
          <AppButton
            style={{ ...styles.button, ...styles.extraButton }}
            title="Sign In"
            onPress={signInHandler}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundAqua,
  },
  wrapper: {
    flex: 1,
    justifyContent: "space-between",
  },
  h1: {
    fontSize: 30,
    color: colors.white,
  },
  input: {
    width: "75%",
  },
  button: {
    width: "75%",
    marginVertical: 10,
  },
  extraButton: {
    backgroundColor: colors.backgroundAqua,
  },
  spinner: {
    top: 0,
  },
});
