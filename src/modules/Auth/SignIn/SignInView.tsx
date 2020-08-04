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
}

export const SignInView = ({ onSubmit, signUpHandler }: Props) => {
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
            inputIcon="account-circle-outline"
            color={colors.aqua}
            style={styles.textInput}
            placeholder="Email"
            autoCompleteType="off"
            value={""}
            onChangeText={() => {}}
          />
          <Input
            style={styles.textInput}
            placeholder="Password"
            secure
            inputIcon="lock-outline"
            color={colors.aqua}
            value={""}
            onChangeText={() => {}}
          />
        </View>
        <View center width="100%" marginB-10>
          <AppButton
            style={styles.extraButtonStyle}
            title="Login"
            onPress={() => console.log("hello")}
          />
          <AppButton
            style={{ ...styles.extraButtonStyle, ...styles.extraButton }}
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
  extraButtonStyle: {
    width: "80%",
    marginTop: 20,
  },
  extraButton: {
    backgroundColor: colors.backgroundAqua,
  },
});
