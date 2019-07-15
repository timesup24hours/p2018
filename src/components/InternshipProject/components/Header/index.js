import React from 'react';
import Center from './Center';
import Right from './Right';
import './index.css';

export default () => {
  return (
    <header className="InternshipProject_header header_container">
      <div className="header_item header_item_left" />
      <div className="header_item header_item_center">
        <Center />
      </div>
      <div className="header_item header_item_right">
        <Right />
      </div>
    </header>
  );
};
