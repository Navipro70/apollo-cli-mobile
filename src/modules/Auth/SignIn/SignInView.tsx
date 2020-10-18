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
    validateOnChange: true,
    initiallyDisabled: false,
    getSchema,
    onSubmit,
  })
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.wrapper}>
        <View center flex>
          <Text h1 children={commonForm.goodMorning} color={colors.gray} />
          <Text h2 marginT-20 children={commonForm.welcomeBack} color={colors.white} />
        </View>
        <View center flex>
          <Input
            {...field('username')}
            inputIcon="account-circle-outline"
            placeholder={commonForm.username}
            returnKeyType="next"
          />
          <Input
            secure
            inputIcon="lock-outline"
            placeholder={commonForm.password}
            {...field('password', { allowSubmit: true })}
          />
        </View>
        <View bottom flex>
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
  extraButton: {
    backgroundColor: colors.backgroundAqua,
    marginVertical: 20,
  },
  button: {
    width: '80%',
  },
})
