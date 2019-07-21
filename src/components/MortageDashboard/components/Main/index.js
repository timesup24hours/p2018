import React from 'react';
import './index.css';

import Simulation from './MainBody/Simulation';
import MainHeader from './MainHeader';

export default () => {
  return (
    <main className="InternshipProject_main">
      <MainHeader />
      <Simulation />
    </main>
  );
};
