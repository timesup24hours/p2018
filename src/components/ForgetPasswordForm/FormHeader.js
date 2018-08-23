import React from 'react';

export default ({ styles }) => (
  <div style={{ ...styles.header, ...styles.flex }}>
    <div style={{ ...styles.headerFlexh1, ...styles.flex }}>
      <h1 style={styles.h1}>Forget password</h1>
    </div>
    <div style={{ ...styles.headerFlexSpan, ...styles.flex }}>
      <span style={styles.span} />
    </div>
  </div>
);
