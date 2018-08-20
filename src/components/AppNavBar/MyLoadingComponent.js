import React from 'react';
import Loading from '../Loading';

export default ({ isLoading, error }) => {
  // Handle the loading state
  if (isLoading) {
    return (
      <div className="center">
        <Loading />
      </div>
    );
  }
  // Handle the error state
  else if (error) {
    return (
      <div className="center">Sorry, there was a problem loading the page.</div>
    );
  } else {
    return null;
  }
};
