import React from 'react';

const styles = {
  checkmark: {
    fontFamily: 'arial',
    // -ms-transform: scaleX(-1) rotate(-35deg); /* IE 9 */
    // -webkit-transform: scaleX(-1) rotate(-35deg); /* Chrome, Safari, Opera */
    transform: 'scaleX(-1) rotate(-45deg)',
    color: 'white',
    textAlign: 'center',
    height: '25px',
    width: '25px',
    lineHeight: '24px',
    fontSize: '.8em',
    fontWeight: '900'
  },
  checked: {
    height: '25px',
    width: '25px',
    backgroundColor: 'var(--main-header-blue-color)',
    borderRadius: '50%',
    display: 'inlineBlock',
    boxShadow: '0px 2px 10px 2px rgba(93, 134, 255, 0.4)'
  }
};
export default () => (
  <div style={styles.checked}>
    <div style={styles.checkmark}>L</div>
  </div>
);
