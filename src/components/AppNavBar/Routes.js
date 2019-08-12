import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

import MyLoadingComponent from './MyLoadingComponent';
import styles from './index.module.css';

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
const MortageDashboard = Loadable({
  loader: () => import('../MortageDashboard'),
  loading: MyLoadingComponent
});
const StarsInteractive = Loadable({
  loader: () => import('../StarsInteractive'),
  loading: MyLoadingComponent
});

const AGGrid = Loadable({
  loader: () => import('../AGGrid'),
  loading: MyLoadingComponent
});

const TodoListDnD = Loadable({
  loader: () => import('../TodoListDnD/index_hv'),
  loading: MyLoadingComponent
});

const AnimationWelcomePage = Loadable({
  loader: () => import('../AnimationWelcomePage'),
  loading: MyLoadingComponent
});

const Blue = Loadable({
  loader: () => import('../Blue'),
  loading: MyLoadingComponent
});

// const SmokeText = Loadable({
//   loader: () => import('../SmokeText'),
//   loading: MyLoadingComponent
// });

const WavyCircle = Loadable({
  loader: () => import('../WavyCircle'),
  loading: MyLoadingComponent
});

const SwipeCarousel = Loadable({
  loader: () => import('../SwipeCarousel'),
  loading: MyLoadingComponent
});

const MobileDatePicker = Loadable({
  loader: () => import('../MobileDatePicker'),
  loading: MyLoadingComponent
});

const SwipeUpDismiss = Loadable({
  loader: () => import('../SwipeUpDismiss'),
  loading: MyLoadingComponent
});

const MaterialGrid = Loadable({
  loader: () => import('../MaterialGrid'),
  loading: MyLoadingComponent
});

const SelfMakeChart = Loadable({
  loader: () => import('../SelfMakeChart'),
  loading: MyLoadingComponent
});

const FirstThreeJS = Loadable({
  loader: () => import('../FirstThreeJS'),
  loading: MyLoadingComponent
});

const MouseClickPixi = Loadable({
  loader: () => import('../MouseClickPixi'),
  loading: MyLoadingComponent
});

const Cube3D = Loadable({
  loader: () => import('../Cube3D'),
  loading: MyLoadingComponent
});
const MouseTracking = Loadable({
  loader: () => import('../MouseTracking'),
  loading: MyLoadingComponent
});

const Routes = () => (
  <div className={styles.pageWrapper}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/my_notes" component={MyNotesPage} />
      <Route exact path="/dashboard_ui" component={MortageDashboard} />
      <Route exact path="/my_notes/:title" component={MyNotesDetailPage} />
      <Route path="/css_effects" component={CssEffectsPage} />
      {/* <Route path="/contact_info" component={ContactInfoPage} /> */}
      <Route path="/contact_info" component={AnimationWelcomePage} />
      <Route path="/stars_interactive" component={StarsInteractive} />
      <Route path="/ag_grid" component={AGGrid} />
      <Route path="/todo" component={TodoListDnD} />
      <Route path="/call" component={AnimationWelcomePage} />
      <Route path="/blue" component={Blue} />
      <Route path="/wavy" component={WavyCircle} />
      <Route path="/swipe" component={SwipeCarousel} />
      <Route path="/date" component={MobileDatePicker} />
      <Route path="/up" component={SwipeUpDismiss} />
      <Route path="/mgrid" component={MaterialGrid} />
      <Route path="/schart" component={SelfMakeChart} />
      <Route path="/three" component={FirstThreeJS} />
      <Route path="/mpixi" component={MouseClickPixi} />
      <Route path="/cube3d" component={Cube3D} />

      <Route path="/mtrack" component={MouseTracking} />

      {/* <Route path="/smoke" component={SmokeText} /> */}

      <Redirect from="/" to="/" />
      <Route path="*" component={Home} />
    </Switch>
  </div>
);

export default Routes;
