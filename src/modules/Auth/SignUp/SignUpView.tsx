import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";
import { colors } from "../../../styles";
import { AUTH_ROUTES as ROUTES } from "../../../constants/routes";
import { useFormik } from "formik";
import { Input } from "../../../components/Input";
import { signUpValidator } from "../../../constants/validatiors";
import { AppButton } from "../../../components/AppButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProp } from "@react-navigation/stack";
import { TAuthScreens } from "../Auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

type ProfileScreenNavigationProp = StackNavigationProp<
  TAuthScreens,
  ROUTES.SignUp
>;

interface Props {
  navigation: ProfileScreenNavigationProp;
}

export const SignUp = ({ navigation }: Props) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signUpValidator,
    onSubmit: ({ confirmPassword, email, password, username }) => {
      console.log(confirmPassword, email, username, password);
    },
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
            onBlur={() => formik.setFieldTouched("username", true)}
            onFocus={() => formik.setFieldTouched("username", false)}
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
            onBlur={() => formik.setFieldTouched("email", true)}
            onFocus={() => formik.setFieldTouched("email", false)}
            error={formik.touched.email ? formik.errors.email : undefined}
            style={styles.input}
            inputIcon="account-circle-outline"
            color={colors.aqua}
            placeholder="Email"
          />
          <Input
            value={formik.values.password}
            onChangeText={(text) => formik.setFieldValue("password", text)}
            onBlur={() => formik.setFieldTouched("password", true)}
            onFocus={() => formik.setFieldTouched("password", false)}
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
            secure
          />
        </View>
        <View center width="100%">
          <AppButton
            style={styles.button}
            title="Submit"
            onPress={() => formik.handleSubmit()}
          />
          <AppButton
            style={{ ...styles.button, ...styles.extraButton }}
            title="Sign In"
            onPress={() => navigation.navigate(ROUTES.SignIn)}
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
});
