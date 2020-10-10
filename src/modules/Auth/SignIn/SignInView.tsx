import React from 'react'
import { StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text } from 'react-native-ui-lib'

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
    username: string().min(5, 'Too short').required(),
    password: string().required(),
  })

interface Props {
  signUpNavigation: () => void
  onSubmit: OnSubmit<Values>
}

export const SignInView = ({ onSubmit, signUpNavigation }: Props) => {
  const { field, submitProps } = useForm({
    getSchema,
    onSubmit,
  })
  const { commonForm } = i18n()
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
            color={colors.aqua}
            // error={formik.touched.username ? formik.errors.username : undefined}
            {...field('username')}
            inputIcon="account-circle-outline"
            maxLength={30}
            placeholder={commonForm.username}
            style={styles.input}
          />
          <Input
            secure
            color={colors.aqua}
            // error={formik.touched.password ? formik.errors.password : undefined}
            inputIcon="lock-outline"
            maxLength={30}
            placeholder={commonForm.password}
            style={styles.input}
            {...field('username')}
          />
        </View>
        <View center marginB-10>
          <AppButton style={styles.extraButton} title={commonForm.login} {...submitProps} />
          <AppButton
            style={{ ...styles.extraButton, ...styles.button }}
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
    width: '80%',
    marginTop: 20,
  },
  button: {
    backgroundColor: colors.backgroundAqua,
  },
  input: {
    width: '75%',
  },
})
