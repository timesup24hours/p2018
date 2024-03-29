import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.css';

import { intersectionObserver } from '../../util';

const templateData = [
  {
    title: 'ReactJS',
    desc:
      'Render props, HOC, lifecycles, React Hooks, Code Split, Lazy, Suspense, React Router'
  },
  {
    title: 'Redux',
    desc:
      'Redux for global state management, Immutable, Redux-thunk or Redux-saga / Apollo GraphQL'
  },
  {
    title: 'Javascript',
    desc:
      'Javascript ES5 prototypal inheritance and ES6 syntax, Closure / Event Loop / Currying / IIFE / Intersection Observer API / Dom API / Pure Function'
  },
  {
    title: 'NodeJS',
    desc: 'Building Restful CRUD API using NodeJS/ExpressJS/Swagger/Auth0/JWT'
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
  },
  {
    title: 'Agile',
    desc:
      'Trello, Jira, InVision, Zeplin, Subject to change, communication tool Slack/Zoom, Write Documentation/Commentting code'
  },
  {
    title: 'Deployment',
    desc: `Linux CMD, SSH, Create Instance in cloud provider, Setting nginx/SSL/Let's Encrypt/load balancing in Docker container infront of multi app instances. Circle CI`
  },
  {
    title: 'Test',
    desc:
      'e2e Puppeteer/Cypress. Jest, Unit testing Enzyme, react-testing-library'
  },
  {
    title: 'Tools',
    desc: '@flow, Typescript, ESLint, Prettier, Vim, VSCode, CRA'
  }
];
const BriefInfo = (): JSX.Element => {
  useEffect((): void => {
    const targets = document.querySelectorAll('#block_info');
    targets.forEach((ele, index): void =>
      intersectionObserver(
        ele,
        {
          fromLeft: 'blockContentAnimation',
          fromTop: 'blockContentAnimationFromTop'
        },
        true,
        index
      )
    );
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        My Tech Stack and
        <Link
          data-heap-track-id="homepage-resume-link"
          to="/my_notes/Resume#00feae1f-b6e4-4e23-ae95-61c486da151e"
          style={{ marginLeft: '12px' }}
        >
          Resume
        </Link>
      </div>
      <div className={styles.blockWrapper}>
        {templateData.map(
          (data, i): JSX.Element => (
            <BlockInfo key={i} data={data} />
          )
        )}
      </div>
    </div>
  );
};
export default BriefInfo;

interface BlockInfoProps {
  key: number;
  data: { title: string; desc: string };
}

const BlockInfo = ({ data }: BlockInfoProps): JSX.Element => {
  return (
    <div id="block_info" className={styles.block}>
      <div className={styles.blockTitle}>{data.title}</div>
      <div className={styles.blockContent}>{data.desc}</div>
    </div>
  );
};
