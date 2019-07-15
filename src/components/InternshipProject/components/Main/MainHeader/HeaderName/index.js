import React from 'react';
import './index.css';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gridArea: 'headerName'
  }
};

export default ({ stepName }) => (
  <div className="main_header_name main_header_font" style={styles.container}>
    {stepName ? stepName : 'Simulation'}
  </div>
);
