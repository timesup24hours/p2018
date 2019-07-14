import React from 'react';

export default ({ styles, cssStyle, isSubmitting }) => (
  <button
    style={styles.button}
    className={`${cssStyle.btn} ${isSubmitting ? `${cssStyle.disabled}` : ''}`}
    type="submit"
    disabled={isSubmitting}
    tabIndex={0}
    aria-label="Send forget password email button"
  >
    {isSubmitting ? 'Sending' : 'Send'}
  </button>
);
