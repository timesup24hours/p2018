import React from 'react';
import FormWrapper from './FormikFormContainer';

import styles from './index.module.css';

export default () => (
  <div className={styles.container}>
    <div className={styles.formText}>UI only no ajax request</div>
    <FormWrapper />
  </div>
);
