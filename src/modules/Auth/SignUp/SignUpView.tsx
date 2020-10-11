import React from 'react'
import { StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text } from 'react-native-ui-lib'

import { AppButton } from '~/components'
import { Input } from '~/components'
import { i18n } from '~/i18n'
import { useForm } from '~/lib/hooks'
import { object, string } from '~/lib/yup'
import { colors } from '~/styles'
import { TSignUpFormik } from '~/types'

export interface Values {
  username: string
  email: string
  password: string
  confirmPassword: string
}

interface Props {
  signInHandler: () => void
  loading: boolean
  onSubmit: TSignUpFormik
}

const getSchema = () =>
  object<Values>({
    email: string().email().required(),
    username: string().required(),
    password: string().min(5).required(),
    confirmPassword: string().min(5).required(),
  })

const { commonForm } = i18n()

export const SignUpView = ({ signInHandler, onSubmit }: Props) => {
  const { field, submitProps, formik } = useForm({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    getSchema,
    onSubmit,
  })
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.wrapper}>
        <View center marginT-40>
          <Text children={i18n().commonForm.createYourAccount} style={styles.h1} />
        </View>
        <View center>
          <Input
            inputIcon="account-circle-outline"
            placeholder={commonForm.username}
            style={styles.input}
            {...field('username')}
          />
          <Input
            inputIcon="account-circle-outline"
            placeholder={commonForm.email}
            style={styles.input}
            {...field('email')}
          />
          <Input
            secure
            inputIcon="lock-outline"
            placeholder={commonForm.password}
            style={styles.input}
            {...field('password')}
          />
          <Input
            secure
            inputIcon="lock-outline"
            placeholder={commonForm.confirmPassword}
            style={styles.input}
            {...field('confirmPassword')}
            onSubmitEditing={() => formik.handleSubmit()}
          />
        </View>
        <View center marginB-10>
          <AppButton style={styles.button} title={commonForm.submit} {...submitProps} />
          <AppButton
            style={[styles.button, styles.extraButton]}
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
    width: '80%',
  },
  extraButton: {
    backgroundColor: colors.backgroundAqua,
    marginVertical: 20,
  },
})
