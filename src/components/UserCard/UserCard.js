import React from 'react';

import styles from './index.css';

export default () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.box}>
          <div className={styles.img}>
            <i className="fas fa-user" />
          </div>
          <h2>
            <div className={styles.name}>Huanlin Huang </div>
            <span>Web Developer</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, addem dolore facere
            voluptatum, rerum quibusdam placeat?
          </p>
          <ul>
            <li>
              <a href="">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="">
                <i className="fab fa-google-plus-g" />
              </a>
            </li>
            <li>
              <a href="">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
            <li>
              <a href="">
                <i className="fab fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
