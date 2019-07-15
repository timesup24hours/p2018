import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

import MyLoadingComponent from './MyLoadingComponent';
import styles from './index.css';

const Home = Loadable({
  loader: () => import('../HomePage'),
  loading: MyLoadingComponent
});

const MyNotesPage = Loadable({
  loader: () => import('../MyNotesPage'),
  loading: MyLoadingComponent
});

const MyNotesDetailPage = Loadable({
  loader: () => import('../NoteDetailPage'),
  loading: MyLoadingComponent
});

const CssEffectsPage = Loadable({
  loader: () => import('../CssEffectsPage'),
  loading: MyLoadingComponent
});
const ContactInfoPage = Loadable({
  loader: () => import('../ContactInfoPage'),
  loading: MyLoadingComponent
});
const InternshipProject = Loadable({
  loader: () => import('../InternshipProject'),
  loading: MyLoadingComponent
});

export default () => (
  <div className={styles.pageWrapper}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/my_notes" component={MyNotesPage} />
      <Route exact path="/dashboard_ui" component={InternshipProject} />
      <Route exact path="/my_notes/:title" component={MyNotesDetailPage} />
      <Route path="/css_effects" component={CssEffectsPage} />
      <Route path="/contact_info" component={ContactInfoPage} />
      <Redirect from="/" to="/" />
      <Route path="*" component={Home} />
    </Switch>
  </div>
);
