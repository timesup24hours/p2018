import { withFormik } from 'formik';

import validationSchema from './validationSchema';

import InnerForm from './InnerForm';

const FormikFormContainer = withFormik({
  mapPropsToValues: ({ email, password, rememberMe }) => {
    return {
      email: email || '',
      password: password || '',
      rememberMe: rememberMe || false
    };
  },
  validationSchema: validationSchema,
  handleSubmit: (values, { resetForm, setErrors, setSubmitting }) => {
    setTimeout(() => {
      if (values.email === '123@123.com') {
        setErrors({ email: 'That email is already taken' });
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 2000);
  }
})(InnerForm);

export default FormikFormContainer;
