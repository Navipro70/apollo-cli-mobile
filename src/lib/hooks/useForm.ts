import { useFormik, FormikConfig } from 'formik'
import { useRef } from 'react'
import { Schema } from 'yup'

export type Errors<Value extends object> = Partial<Record<keyof Value, string>>
export type OnSubmit<Value extends object> = (value: Value) => Promise<void | Errors<Value>>

export interface SubmitProps {
  disabled: boolean
  loading: boolean
  onPress: () => void
}

export interface FieldProps<Value> {
  value: Value
  error?: string
  onChange: (v?: Value) => void
  onSubmit?: () => void
}

interface Config<Values extends object>
  extends Omit<FormikConfig<Values>, 'validationSchema' | 'initialValues'> {
  initialValues?: Partial<Values>
  getSchema: () => Schema<Values>
  initiallyDisabled?: boolean
}

export function useForm<Values extends object>({
  initiallyDisabled = true,
  ...config
}: Config<Values>) {
  const initial = config.getSchema().cast()
  const lastSubmitValues = useRef<Partial<Values> | null>(null)

  const formik = useFormik({
    ...config,
    enableReinitialize: config.enableReinitialize ?? true,
    initialValues: { ...initial, ...config.initialValues },
    validationSchema: config.getSchema(),
    onSubmit: async (values, formikHelpers) => {
      lastSubmitValues.current = values
      const errors = await config.onSubmit(values, formikHelpers)
      if (errors) {
        for (let field in errors) {
          formikHelpers.setFieldError(field, errors[field])
        }
      }

      return errors
    },
  })

  const submitProps: SubmitProps = {
    disabled: formik.isSubmitting || (initiallyDisabled && !formik.dirty),
    loading: formik.isSubmitting,
    onPress: () => formik.handleSubmit(),
  }

  const field = <Name extends keyof Values>(
    name: Name,
    options?: { allowSubmit?: boolean; validateOnChange?: boolean },
  ): FieldProps<Values[Name]> => {
    const dirtySinceLastSubmit =
      !!lastSubmitValues.current && lastSubmitValues.current[name] !== formik.values[name]
    const showError = options?.validateOnChange || (!!formik.submitCount && !dirtySinceLastSubmit)

    return {
      error: showError ? (formik.errors[name] as string) : undefined,
      onChange: (value?: Values[Name]) =>
        formik.setFieldValue(name as string, value === undefined ? initial[name] : value),
      value: formik.values[name],
      onSubmit: options?.allowSubmit ? formik.submitForm : undefined,
    }
  }

  return { formik, submitProps, field, values: formik.values }
}
