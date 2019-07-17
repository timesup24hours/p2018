import React from 'react';

const code = `// withObservableStream.js
import React from 'react';

export default (observable, triggers, initialState) => Component => {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        ...initialState,
      };
    }

    componentDidMount() {
      this.subscription = observable.subscribe(newState =>
        this.setState({ ...newState }),
      );
    }

    componentWillUnmount() {
      this.subscription.unsubscribe();
    }

    render() {
      return (
        <Component {...this.props} {...this.state} {...triggers} />
      );
    }
  };
};`;

const code1 = `// App.js
import React from 'react';
import axios from 'axios';
import { BehaviorSubject, combineLatest, timer } from 'rxjs';
import { flatMap, map, debounce, filter } from 'rxjs/operators';

import withObservableStream from './withObservableStream';

const SUBJECT = {
  POPULARITY: 'search',
  DATE: 'search_by_date',
};

const App = ({
  query,
  subject,
  stories,
  onChangeQuery,
  onSelectSubject,
}) => (
  <div>
    <h1>React with RxJS</h1>

    <input
      type="text"
      value={query}
      onChange={event => onChangeQuery(event.target.value)}
    />

    <div>
      {Object.values(SUBJECT).map(subject => (
        <button
          key={subject}
          onClick={() => onSelectSubject(subject)}
          type="button"
        >
          {subject}
        </button>
      ))}
    </div>

    <p>
      Fetching from:{' '}
    </p>

    <ul>
      {stories.map(story => (
        <li key={story.objectID}>
          <a href={story.url || story.story_url}>
            {story.title || story.story_title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const query$ = new BehaviorSubject('react');
const subject$ = new BehaviorSubject(SUBJECT.POPULARITY);

const queryForFetch$ = query$.pipe(
  debounce(() => timer(1000)),
  filter(query => query !== ''),
);

const fetch$ = combineLatest(subject$, queryForFetch$).pipe(
  flatMap(([subject, query]) =>
    axios('http://hn.algolia.com/api/v1/' + subject + '?query=' + query),
  ),
  map(result => result.data.hits),
);

export default withObservableStream(
  combineLatest(
    subject$,
    query$,
    fetch$,
    (subject, query, stories) => ({
      subject,
      query,
      stories,
    }),
  ),
  {
    onSelectSubject: subject => subject$.next(subject),
    onChangeQuery: value => query$.next(value),
  },
  {
    query: 'react',
    subject: SUBJECT.POPULARITY,
    stories: [],
  },
)(App);`;

export default {
  id: '513fdf62-ff23-4f14-91f3-b4db0339a1c2',
  title: 'RxJS',
  subTitle: 'React rxjs state management hoc example',
  article: [
    { title: 'RxJS' },
    {
      subTitle: 'React rxjs state management hoc example'
    },
    { code: code },
    { html: ({ index }) => <br key={index} /> },
    { html: ({ index }) => <br key={index} /> },
    { code: code1 },
    { html: ({ index }) => <br key={index} /> },
    { html: ({ index }) => <br key={index} /> }
  ],
  createdAt: '2017-11-11T22:52:04.034Z'
};
