import { object, string } from 'yup';

export default () =>
  object().shape({
    email: string()
      .email('Email not valid')
      .required('Email is required')
  });
