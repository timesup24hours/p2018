import React from 'react';

import Button from './Button';
// import ForgotPassword from './ForgotPassword';

export default ({ styles, cssStyle, isSubmitting }) => (
  <div style={{ ...styles.flex, ...styles.bottom }}>
    {/* <div style={styles.option}>
      <ForgotPassword styles={styles} cssStyle={cssStyle} />
    </div> */}
    <Button styles={styles} cssStyle={cssStyle} isSubmitting={isSubmitting} />
  </div>
);
