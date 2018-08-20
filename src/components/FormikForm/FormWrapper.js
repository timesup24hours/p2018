import React from 'react';
import FormWrapper from './FormikFormContainer';

const styles = {
  container: {
    background: 'rgb(230, 242, 255)',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  }
};

export default () => (
  <div style={styles.container}>
    <FormWrapper />
  </div>
);
