import React from 'react';
import FormikFormContainer from './FormikFormContainer';

import styles from './index.module.css';

export default () => (
  <div className={styles.container}>
    <FormikFormContainer />
    <div className={styles.formText}>UI only no ajax request</div>
  </div>
);
