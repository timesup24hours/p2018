import React from 'react';

const code = `// App.js
import React from 'react';
import { Helmet } from 'react-helmet';

const App = () => (
  <div className="app">
    <Helmet titleTemplate="%s - My App" defaultTitle="My App">
      <meta name="description" content="A React.js aapplication" />
    </Helmet>
    <h1>My App</h1>
  </div>
);

export default App;`;

const code1 = `// PageTwo.js
import React from 'react';
import { Helmet } from 'react-helmet';

export default class PageTwo extends React.Component {
  <div className="page-two">
    <Helmet>
      <title>Page 2</title>
      <meta name="description" content="This is a different description for this route." />
    </Helmet>
    <h1>Page 2</h1>
  </div>
);;`;

export default {
  id: '46e7361a-b535-44d3-abb4-5a938c59f64d',
  title: 'SEO title',
  subTitle:
    'Helmet is a React component that allows us to manage all of the changes to the document head',
  article: [
    { title: 'Dynamic document head with React Helmet' },
    {
      subTitle:
        'Helmet is a React component that allows us to manage all of the changes to the document head'
    },
    { content: 'Page 2 - My App' },
    { code: code },
    { html: ({ index }) => <br key={index} /> },
    { html: ({ index }) => <br key={index} /> },
    { code: code1 },
    {
      text:
        'Now the output title will be Page 2 - My App since we established the template. The %s is substituted by the string we pass on the title tag.'
    },
    { html: ({ index }) => <br key={index} /> },
    { html: ({ index }) => <br key={index} /> }
  ],
  createdAt: '2017-10-24T09:53:12.243Z'
};
