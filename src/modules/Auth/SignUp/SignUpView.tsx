import { useFormik } from 'formik'
import React from 'react'
import { StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text } from 'react-native-ui-lib'

import { AppButton } from '~/components/AppButton'
import { Input } from '~/components/Input'
import { signUpValidator } from '~/constants/validatiors'
import { i18n } from '~/i18n/i18n'
import { colors } from '~/styles'
import { TSignUpFormik } from '~/types'

interface Props {
  signInHandler: () => void
  loading: boolean
  onSubmit: TSignUpFormik
}

export const SignUpView = ({ signInHandler, loading, onSubmit }: Props) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: signUpValidator,
    onSubmit,
  })
  const { commonForm } = i18n()
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.wrapper}>
        <View center marginT-40>
          <Text children={i18n().commonForm.createYourAccount} style={styles.h1} />
        </View>
        <View center>
          <Input
            color={colors.aqua}
            error={formik.touched.username ? formik.errors.username : undefined}
            inputIcon="account-circle-outline"
            maxLength={30}
            placeholder={commonForm.username}
            style={styles.input}
            value={formik.values.username}
            onBlur={() => formik.setFieldTouched('username', true)}
            onChangeText={(text) => formik.setFieldValue('username', text)}
            onFocus={() => formik.setFieldTouched('username', false)}
          />
          <Input
            color={colors.aqua}
            error={formik.touched.email ? formik.errors.email : undefined}
            inputIcon="account-circle-outline"
            maxLength={30}
            placeholder={commonForm.email}
            style={styles.input}
            value={formik.values.email}
            onBlur={() => formik.setFieldTouched('email', true)}
            onChangeText={(text) => formik.setFieldValue('email', text)}
            onFocus={() => formik.setFieldTouched('email', false)}
          />
          <Input
            secure
            color={colors.aqua}
            error={formik.touched.password ? formik.errors.password : undefined}
            inputIcon="lock-outline"
            maxLength={30}
            placeholder={commonForm.password}
            style={styles.input}
            value={formik.values.password}
            onBlur={() => formik.setFieldTouched('password', true)}
            onChangeText={(text) => formik.setFieldValue('password', text)}
            onFocus={() => formik.setFieldTouched('password', false)}
          />
          <Input
            secure
            color={colors.aqua}
            error={formik.touched.confirmPassword ? formik.errors.confirmPassword : undefined}
            inputIcon="lock-outline"
            maxLength={30}
            placeholder={commonForm.confirmPassword}
            style={styles.input}
            value={formik.values.confirmPassword}
            onBlur={() => formik.setFieldTouched('confirmPassword', true)}
            onChangeText={(text) => formik.setFieldValue('confirmPassword', text)}
            onFocus={() => formik.setFieldTouched('confirmPassword', false)}
            onSubmitEditing={() => formik.handleSubmit()}
          />
        </View>
        <View center>
          <AppButton
            loading={loading}
            spinnerStyle={styles.spinner}
            style={styles.button}
            title={commonForm.submit}
            onPress={formik.handleSubmit}
          />
          <AppButton
            style={{ ...styles.button, ...styles.extraButton }}
            title={commonForm.signIn}
            onPress={signInHandler}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundAqua,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  h1: {
    fontSize: 30,
    color: colors.white,
  },
  input: {
    width: '75%',
  },
  button: {
    width: '75%',
    marginVertical: 10,
  },
  extraButton: {
    backgroundColor: colors.backgroundAqua,
  },
  spinner: {
    top: 0,
  },
})
