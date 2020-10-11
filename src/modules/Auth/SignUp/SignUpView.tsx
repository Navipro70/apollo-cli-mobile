import React from 'react'
import { StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text } from 'react-native-ui-lib'
import { Schema } from 'yup'

import { AppButton } from '~/components'
import { Input } from '~/components'
import { i18n } from '~/i18n'
import { OnSubmit, useForm } from '~/lib/hooks'
import { object, string } from '~/lib/yup'
import { colors } from '~/styles'

export interface Values {
  username: string
  email: string
  password: string
  confirmPassword: string
}

interface Props {
  signInNavigation: () => void
  onSubmit: OnSubmit<Values>
}

const getSchema = () =>
  object<Values>({
    email: string().email().required(),
    username: string().required(),
    password: string().min(5).required(),
    confirmPassword: string().min(5).required(),
  }) as Schema<Values>

const { commonForm } = i18n()

export const SignUpView = ({ signInNavigation, onSubmit }: Props) => {
  const { field, submitProps, formik } = useForm({
    validateOnBlur: true,
    validateOnChange: false,
    initiallyDisabled: false,
    getSchema,
    onSubmit,
  })
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.wrapper}>
        <View center flex>
          <Text h1 children={commonForm.firstTime} color={colors.gray} />
          <Text h2 marginT-20 children={commonForm.createYourAccount} color={colors.white} />
        </View>
        <View center flex>
          <Input
            inputIcon="account-circle-outline"
            placeholder={commonForm.username}
            {...field('username')}
          />
          <Input
            inputIcon="account-circle-outline"
            placeholder={commonForm.email}
            {...field('email')}
          />
          <Input
            secure
            inputIcon="lock-outline"
            placeholder={commonForm.password}
            {...field('password')}
          />
          <Input
            secure
            inputIcon="lock-outline"
            placeholder={commonForm.confirmPassword}
            {...field('confirmPassword')}
            onSubmitEditing={() => formik.handleSubmit()}
          />
        </View>
        <View bottom flex>
          <AppButton style={styles.button} title={commonForm.submit} {...submitProps} />
          <AppButton
            style={[styles.button, styles.extraButton]}
            title={commonForm.signIn}
            onPress={signInNavigation}
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
  extraButton: {
    backgroundColor: colors.backgroundAqua,
    marginVertical: 20,
  },
  button: {
    width: '80%',
  },
})
