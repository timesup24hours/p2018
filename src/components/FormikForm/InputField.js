import React from 'react';
import { Field } from 'formik';

export default ({
  styles,
  cssStyle,
  touched,
  errors,
  type,
  name,
  placeholder,
  label
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
      aria-label={label}
    />
    {touched[name] && errors[name] && (
      <p
        id={`${name}-error`}
        htmlFor={name}
        style={styles.error}
        aria-label={errors[name]}
      >
        {errors[name]}
      </p>
    )}
  </div>
);
