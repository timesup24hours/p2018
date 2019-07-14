import React, { useEffect } from 'react';

import styles from './index.css';

import { intersectionObserver } from '../../util';

const templateData = [
  {
    title: 'ReactJS',
    desc: 'Render props, HOC, lifecycles, React Hooks'
  },
  {
    title: 'Redux',
    desc:
      'Redux for global state management, Immutable, Redux-thunk or Redux-saga'
  },
  {
    title: 'Javascript',
    desc:
      'Javascript ES5 prototypal inheritance and ES6 syntax, Closure / Event Loop / Currying / IIFE / Intersection Observer API / Dom API / Pure Function'
  },
  {
    title: 'NodeJS',
    desc: 'Building Restful /CRUD API using NodeJS/ExpressJS/Swagger'
  },
  {
    title: 'MongoDB',
    desc: 'Building schema using MongoDB/Mongoose, Validator Joi'
  },
  {
    title: 'HTML',
    desc:
      'Semantic HTML HTML5/Accessibility/Screen Reader/Keyboard user friendly'
  },
  {
    title: 'CSS',
    desc: 'CSS SASS/SCSS /CSS3 Animation/Mobile/Multi screen sizes friendly'
  },
  {
    title: 'CS',
    desc: 'Computer science fundamentals and Data structures, MVC, OOP'
  }
];
export default () => {
  useEffect(() => {
    const targets = document.querySelectorAll('#block_info');
    targets.forEach(ele => intersectionObserver(ele, 'blockContentAnimation'));
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.title}>My Tech Stack</div>
      <div className={styles.blockWrapper}>
        {templateData.map((data, i) => (
          <BlockInfo key={i} data={data} />
        ))}
      </div>
    </div>
  );
};

const BlockInfo = ({ data }) => {
  return (
    <div id="block_info" className={styles.block}>
      <div className={styles.blockTitle}>{data.title}</div>
      <div className={styles.blockContent}>{data.desc}</div>
    </div>
  );
};
