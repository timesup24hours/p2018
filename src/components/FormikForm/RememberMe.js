import React from 'react';
import { Field } from 'formik';

export default ({ cssStyle, values }) => (
  <label className={cssStyle.label}>
    <Field
      className={cssStyle.rememberMe}
      type="checkbox"
      name="rememberMe"
      checked={values.rememberMe}
    />
    <span className={cssStyle.disabledSelect}>&nbsp;Remember me</span>
  </label>
);
