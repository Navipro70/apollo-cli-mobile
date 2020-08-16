import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { colors } from "../../../styles";
import { AppButton } from "../../../components/AppButton";
import { Input } from "../../../components/Input";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useFormik } from "formik";
import { signInValidator } from "../../../constants/validatiors";
import { TSignInFormik } from "../../../types";

interface Props {
  loading: boolean;
  signUpHandler: () => void;
  onSubmit: TSignInFormik;
  generalError: string;
}

export const SignInView = ({
  onSubmit,
  signUpHandler,
  loading,
  generalError,
}: Props) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: signInValidator,
    onSubmit,
  });

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.wrapper}>
        <View marginT-40 center>
          <Text
            color={colors.gray}
            style={styles.h3}
            children="Good morning!"
          />
          <Text
            color="#fff"
            marginT-20
            style={styles.h1}
            children="Welcome back."
          />
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
            onSubmitEditing={() => formik.handleSubmit()}
            secure
          />
          <View center>
            <Text children={generalError} style={styles.generalError} />
          </View>
        </View>
        <View center marginB-10>
          <AppButton
            style={styles.extraButton}
            title="Login"
            onPress={formik.handleSubmit}
            loading={loading}
          />
          <AppButton
            style={{ ...styles.extraButton, ...styles.button }}
            title="SignUp"
            onPress={signUpHandler}
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
    fontSize: 40,
  },
  h3: {
    fontSize: 24,
  },
  textInput: {
    width: "75%",
  },
  extraButton: {
    width: "80%",
    marginTop: 20,
  },
  button: {
    backgroundColor: colors.backgroundAqua,
  },
  input: {
    width: "75%",
  },
  generalError: {
    position: "absolute",
    color: colors.red,
    fontSize: 16,
  },
});
