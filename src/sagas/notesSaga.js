import {
  call,
  put,
  select,
  takeEvery,
  takeLatest,
  take,
  cancel,
  cancelled
} from 'redux-saga/effects';
import { notes } from '../actions';
import apis from '../apis';

function* watchAndLog() {
  yield takeEvery('*', function* logger(action) {
    const state = yield select();

    console.log('action', action);
    console.log('state after', state);
  });
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchNotes(action) {
  try {
    const data = yield call(apis.fetchNotes, action.payload);
    yield put(notes.notesFetchSucceeded(data));
  } catch (e) {
    yield put(notes.notesFetchFailed(e.message));
  } finally {
    if (yield cancelled()) {
      // yield put(notes.notesFetchFailed('request cancelled'));
    }
  }
}

/*
  Starts fetchNotes on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* notesFetchRequested() {
  while (true) {
    const fetchTask = yield takeLatest('NOTES_FETCH_REQUESTED', fetchNotes);
    const cancelAction = yield take(notes.types.NOTES_FETCH_CANCELLED);
    if (cancelAction.type === notes.types.NOTES_FETCH_CANCELLED)
      yield cancel(fetchTask);
  }
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

export { notesFetchRequested, watchAndLog };
