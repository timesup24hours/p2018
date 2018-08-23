import { withFormik } from 'formik';

import InnerForm from './InnerForm';
import validationSchema from './validationSchema';
import handleSubmit from './handleSubmit';

const FormikFormContainer = withFormik({
  mapPropsToValues: ({ email, password, rememberMe }) => {
    return {
      email: email || '',
      password: password || '',
      rememberMe: rememberMe || false
    };
  },
  validationSchema: validationSchema,
  handleSubmit: handleSubmit
})(InnerForm);

export default FormikFormContainer;
