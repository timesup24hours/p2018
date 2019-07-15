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
      id={name}
      placeholder={placeholder}
      aria-invalid={errors[name] ? true : false}
      aria-describedby={`${name}-error`}
      aria-required={true}
    />
    {touched[name] && errors[name] && (
      <p
        id={`${name}-error`}
        for={name}
        style={styles.error}
        ariaLabel={errors[name]}
      >
        {errors[name]}
      </p>
    )}
  </div>
);
