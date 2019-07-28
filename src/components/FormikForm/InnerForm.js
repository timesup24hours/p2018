import React from 'react';
import { Form } from 'formik';

import cssStyle from './index.module.css';
import InputField from './InputField';
import FormHeader from './FormHeader';
import FormFooter from './FormFooter';

// trying to experience the inline style
import styles from './styles';
import stylesModule from './index.module.css';

// refacotry needed
const InnerForm = ({
  values,
  errors,
  touched,
  isSubmitting,
  forgotPasswordOnClick
}) => (
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
      label="email"
    />
    <InputField
      styles={styles}
      cssStyle={cssStyle}
      touched={touched}
      errors={errors}
      type="password"
      name="password"
      placeholder="Password"
      label="password"
    />
    <FormFooter
      styles={styles}
      cssStyle={cssStyle}
      values={values}
      isSubmitting={isSubmitting}
      forgotPasswordOnClick={forgotPasswordOnClick}
    />
    {errors.bad && (
      <div
        className={stylesModule.formText}
        style={{
          opacity: '1',
          padding: '0px 20px',
          backgroundColor: 'rgb(230, 242, 255)',
          zIndex: '99'
        }}
      >
        {errors.bad}
      </div>
    )}
  </Form>
);

export default InnerForm;
