import React from 'react';
import { Form } from 'formik';

import cssStyle from './index.module.css';
import InputField from './InputField';
import FormHeader from './FormHeader';
import FormFooter from './FormFooter';

// trying to experience the inline style
import styles from './styles';

// refacotry needed
const InnerForm = ({ values, errors, touched, isSubmitting }) => {
  return (
    <Form style={{ ...styles.container, ...styles.flex }}>
      {values.success ? (
        <div style={{ textAlign: 'center' }}>
          a reset password link has been sent to {values.email}
          {values.success}
        </div>
      ) : (
        <React.Fragment>
          <FormHeader styles={styles} />
          <InputField
            styles={styles}
            cssStyle={cssStyle}
            touched={touched}
            errors={errors}
            type="email"
            name="login"
            placeholder="your email"
          />
          <FormFooter
            styles={styles}
            cssStyle={cssStyle}
            isSubmitting={isSubmitting}
          />
        </React.Fragment>
      )}
    </Form>
  );
};

export default InnerForm;
