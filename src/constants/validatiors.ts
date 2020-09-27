import * as Yup from 'yup'

export const signUpValidator = Yup.object().shape({
  email: Yup.string().email('Enter a valid email').required('Field is required'),
  username: Yup.string().required('Field is required'),
  password: Yup.string().min(5, 'Too short').required('Field is required'),
  confirmPassword: Yup.string().min(5, 'Too short').required('Field is required'),
})

export const signInValidator = Yup.object().shape({
  username: Yup.string().required('Field is required'),
  password: Yup.string().min(5, 'Too short').required('Field is required'),
})
