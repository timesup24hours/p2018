import React from 'react';

export default ({ styles, cssStyle, isSubmitting }) => (
  <button
    style={styles.button}
    className={`${cssStyle.btn} ${isSubmitting ? `${cssStyle.disabled}` : ''}`}
    type="submit"
    disabled={isSubmitting}
  >
    {isSubmitting ? 'Submitting ' : 'Sign in'}
  </button>
);
