import React from 'react';
import { Field } from 'formik';

export default ({
  styles,
  cssStyle,
  touched,
  errors,
  type,
  name,
  placeholder
}) => (
  <div style={styles.field}>
    <Field
      className={cssStyle.input}
      type={type}
      name={name}
      placeholder={placeholder}
    />
    {touched[name] &&
      errors[name] && <p style={styles.error}>{errors[name]}</p>}
  </div>
);
