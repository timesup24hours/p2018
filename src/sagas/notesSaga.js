import {
  call,
  put,
  takeEvery
  // takeLatest
} from 'redux-saga/effects';
import { notes } from '../actions';
import apis from '../apis';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchNotes(action) {
  try {
    const data = yield call(apis.fetchNotes, action.payload);
    yield put(notes.notesFetchSucceeded(data));
  } catch (e) {
    yield put(notes.notesFetchFailed(e.message));
  }
}

/*
  Starts fetchNotes on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* notesFetchRequested() {
  yield takeEvery('NOTES_FETCH_REQUESTED', fetchNotes);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
// function* mySaga() {
//   yield takeLatest('USER_FETCH_REQUESTED', fetchNotes);
// }

export default notesFetchRequested;
