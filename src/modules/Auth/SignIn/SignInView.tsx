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
  password: string
}

const getSchema = () =>
  object<Values>({
    username: string().required(),
    password: string().min(5).required(),
  }) as Schema<Values>

interface Props {
  signUpNavigation: () => void
  onSubmit: OnSubmit<Values>
}

const { commonForm } = i18n()

export const SignInView = ({ onSubmit, signUpNavigation }: Props) => {
  const { field, submitProps } = useForm({
    validateOnBlur: true,
    validateOnChange: false,
    initiallyDisabled: false,
    getSchema,
    onSubmit,
  })
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.wrapper}>
        <View center marginT-40>
          <Text children={commonForm.goodMorning} color={colors.gray} style={styles.h3} />
          <Text
            marginT-20
            children={commonForm.welcomeBack}
            color={colors.white}
            style={styles.h1}
          />
        </View>
        <View center>
          <Input
            {...field('username')}
            inputIcon="account-circle-outline"
            placeholder={commonForm.username}
            style={styles.input}
          />
          <Input
            secure
            inputIcon="lock-outline"
            placeholder={commonForm.password}
            style={styles.input}
            {...field('password', { allowSubmit: true })}
          />
        </View>
        <View center marginB-10>
          <AppButton style={styles.button} title={commonForm.login} {...submitProps} />
          <AppButton
            style={[styles.extraButton, styles.button]}
            title={commonForm.signUp}
            onPress={signUpNavigation}
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
    backgroundColor: colors.backgroundAqua,
    marginVertical: 20,
  },
  button: {
    width: '80%',
  },
  input: {
    width: '75%',
  },
})
