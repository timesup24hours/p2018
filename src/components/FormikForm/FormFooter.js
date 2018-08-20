import React from 'react';

import Button from './Button';
import RememberMe from './RememberMe';
import ForgotPassword from './ForgotPassword';

export default ({ styles, cssStyle, values, isSubmitting }) => (
  <div style={{ ...styles.flex, ...styles.bottom }}>
    <div style={styles.option}>
      <RememberMe cssStyle={cssStyle} values={values} />
      <ForgotPassword styles={styles} cssStyle={cssStyle} />
    </div>
    <Button styles={styles} cssStyle={cssStyle} isSubmitting={isSubmitting} />
  </div>
);
