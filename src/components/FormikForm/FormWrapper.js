import React from 'react';
import FormikFormContainer from './FormikFormContainer';

import styles from './index.css';

export default () => (
  <div className={styles.container}>
    <div className={styles.formText}>UI only no ajax request</div>
    <FormikFormContainer />
  </div>
);
