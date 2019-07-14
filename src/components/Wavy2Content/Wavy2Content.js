import React from 'react';

import styles from './index.css';

export default class Wavy2Content extends React.PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>Libraries I have used in production:</div>
        <div className={styles.content}>
          <ul>
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
  }
}
