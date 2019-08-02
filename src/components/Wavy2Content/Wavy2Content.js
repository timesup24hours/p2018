import React, { useEffect } from 'react';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Splitting from 'splitting';

import styles from './index.module.css';
import './index.scss';

import { intersectionObserver } from '../../util';

const Wavy2Content = () => {
  useEffect(() => {
    const target = document.querySelector('#target');

    intersectionObserver(
      target,
      undefined,
      true,
      0,
      () => Splitting({ target: target, by: 'chars' }),
      undefined
    );
  });
  return (
    <div className={`Wavy2Content ${styles.container}`}>
      <div className={styles.title}>Libraries I have used in production:</div>
      <div className={styles.content}>
        <ul id="target">
          <li>GIT</li>
          <li>D3.js/Recharts for data visualization</li>
          <li>End-to-end testing with Puppeteer and Jest</li>
          <li>Unit test using react-testing-library, enzyme, Jest</li>
          <li>Rich Text Editor, DraftJS</li>
          <li>Video and Screen Recording, WebRTC</li>
          <li>react-s3-uploader</li>
          <li>Material Ui/Ant Design</li>
          <li>React Transition Group</li>
          <li>... more</li>
        </ul>
      </div>
    </div>
  );
};

export default Wavy2Content;
