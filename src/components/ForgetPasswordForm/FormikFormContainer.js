import { withFormik } from 'formik';

import InnerForm from './InnerForm';
import validationSchema from './validationSchema';
import handleSubmit from './handleSubmit';

const FormikFormContainer = withFormik({
  mapPropsToValues: ({ email, success }) => {
    return {
      email: email || '',
      success: success || false
    };
  },
  validationSchema: validationSchema,
  handleSubmit: handleSubmit
})(InnerForm);

export default FormikFormContainer;
