import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

export default () => {
  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link to="/blue" data-heap-track-id="ui-page-blue">
            <i className="fas fa-birthday-cake" />
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="/stars_interactive" data-heap-track-id="ui-page-starts">
            <i className="fas fa-award" />
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="/wavy" data-heap-track-id="ui-page-wavy">
            <i className="fas fa-bug" />
          </Link>
        </li>
      </ul>
      <div className={styles.desc}>click buttons above to other projects</div>
    </div>
  );
};
