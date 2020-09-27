import { useFormik } from 'formik'
import React from 'react'
import { StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text } from 'react-native-ui-lib'

import { AppButton } from '~/components'
import { Input } from '~/components'
import { signInValidator } from '~/constants'
import { i18n } from '~/i18n'
import { colors } from '~/styles'
import { TSignInFormik } from '~/types'

interface Props {
  loading: boolean
  signUpHandler: () => void
  onSubmit: TSignInFormik
}

export const SignInView = ({ onSubmit, signUpHandler, loading }: Props) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: signInValidator,
    onSubmit,
  })
  const { commonForm } = i18n()
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.wrapper}>
        <View center marginT-40>
          <Text children={commonForm.goodMorning} color={colors.gray} style={styles.h3} />
          <Text marginT-20 children={commonForm.welcomeBack} color="#fff" style={styles.h1} />
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
            onSubmitEditing={() => formik.handleSubmit()}
          />
        </View>
        <View center marginB-10>
          <AppButton
            loading={loading}
            style={styles.extraButton}
            title={commonForm.login}
            onPress={formik.handleSubmit}
          />
          <AppButton
            style={{ ...styles.extraButton, ...styles.button }}
            title={commonForm.signUp}
            onPress={signUpHandler}
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
    fontSize: 40,
  },
  h3: {
    fontSize: 24,
  },
  extraButton: {
    width: '80%',
    marginTop: 20,
  },
  button: {
    backgroundColor: colors.backgroundAqua,
  },
  input: {
    width: '75%',
  },
  generalError: {
    position: 'absolute',
    color: colors.red,
    fontSize: 16,
  },
})
