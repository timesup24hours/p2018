import React from 'react';
import { Form } from 'formik';

import cssStyle from './index.css';
import InputField from './InputField';
import FormHeader from './FormHeader';
import FormFooter from './FormFooter';

// trying to experience the inline style
import styles from './styles';

// refacotry needed
const InnerForm = ({ values, errors, touched, isSubmitting }) => (
  <Form style={{ ...styles.container, ...styles.flex }}>
    <FormHeader styles={styles} />
    <InputField
      styles={styles}
      cssStyle={cssStyle}
      touched={touched}
      errors={errors}
      type="email"
      name="email"
      placeholder="Email"
    />
    <InputField
      styles={styles}
      cssStyle={cssStyle}
      touched={touched}
      errors={errors}
      type="password"
      name="password"
      placeholder="Password"
    />
    <FormFooter
      styles={styles}
      cssStyle={cssStyle}
      values={values}
      isSubmitting={isSubmitting}
    />
  </Form>
);

export default InnerForm;
