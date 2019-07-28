import React, { useState } from 'react';
import FormikFormContainer from './FormikFormContainer';
import ForgetPasswordForm from '../ForgetPasswordForm';

import styles from './index.module.css';

export default () => {
  const [show, setShow] = useState(true);
  const forgotPasswordOnClick = () => {
    setShow(false);
  };

  return show ? (
    <div className={styles.container}>
      <FormikFormContainer forgotPasswordOnClick={forgotPasswordOnClick} />
      <div className={styles.formText}>UI only no ajax request</div>
    </div>
  ) : (
    <ForgetPasswordForm />
  );
};
