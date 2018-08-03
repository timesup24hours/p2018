import { all, fork } from 'redux-saga/effects';

import * as notesSaga from './notesSaga';

export default function* rootSaga() {
  yield all([...Object.values(notesSaga)].map(fork));
}
