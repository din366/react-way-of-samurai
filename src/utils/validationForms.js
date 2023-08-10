import * as Yup from 'yup';

export const LoginValidationSchema = Yup.object().shape({
  login: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});