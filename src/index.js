import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSagas from './sagas';

import registerServiceWorker from './registerServiceWorker';

// import registerServiceWorker from './registerServiceWorker';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSagas);

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};
// registerServiceWorker();
// Do this once
registerServiceWorker();

// Render once
render(App);

// Webpack Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept('./App', () => {
//     render(App);
//   });
// }
if (process.env.NODE_ENV === 'production') {
  if (!window.console) window.console = {};
  var methods = ['log', 'debug', 'warn', 'info'];
  for (var i = 0; i < methods.length; i++) {
    console[methods[i]] = function() {};
  }
}
