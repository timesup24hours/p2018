import { object, string } from 'yup';

export default () =>
  object().shape({
    email: string()
      .email('Email not valid')
      .required('Email is required'),
    password: string()
      .min(9, 'Password must be 9 characters or longer')
      .required('Password is required')
  });
