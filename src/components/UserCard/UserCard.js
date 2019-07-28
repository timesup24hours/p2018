import React, { useEffect } from 'react';

import styles from './index.module.css';

import { intersectionObserver } from '../../util';

export default ({ hasAnimation }) => {
  useEffect(() => {
    if (hasAnimation) {
      const targets = document.querySelectorAll('#user-card');
      targets.forEach(ele =>
        intersectionObserver(ele, { fromLeft: 'userCardAnimation' })
      );
    }
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.card} id="user-card">
        <div className={styles.box}>
          <div className={styles.img}>
            <img
              src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/11885312_933409170050854_7994195451447625344_n.jpg?_nc_cat=104&_nc_oc=AQlMKlZHoqUMtYI59PfKcT5J7jf2JCGEntLcuPO-mtMG3VwrGCpI__EvPV4SdcCGI9OfgkP3ZeWYcxunQTIMawfQ&_nc_ht=scontent-sjc3-1.xx&oh=76860530bb5a10e1f9535446764bb8fa&oe=5DBDC123"
              alt=""
            />
            {/* <i className="fas fa-user" /> */}
          </div>
          <h2>
            <div className={styles.name}>Huanlin Huang </div>
            <span>Vim user</span>
          </h2>
          <p>I am a self-taught full-stack developer, since 2017</p>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/huanlin.huang"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/huanlin-huang-4b7b9b183"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/timesup24hours"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
