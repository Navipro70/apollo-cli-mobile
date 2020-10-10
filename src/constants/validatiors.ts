import * as Yup from 'yup'

export const signUpValidator = Yup.object().shape({
  email: Yup.string().email().required('Field is required'),
  username: Yup.string().required('Field is required'),
  password: Yup.string().min(5).required('Field is required'),
  confirmPassword: Yup.string().min(5).required('Field is required'),
})
