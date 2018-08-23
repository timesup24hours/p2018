import {
  call,
  put,
  // select,
  // takeEvery,
  takeLatest,
  take,
  cancel,
  cancelled
} from 'redux-saga/effects';
import { notes } from '../actions';
import apis from '../apis';

// function* watchAndLog() {
//   yield takeEvery('*', function* logger(action) {
//     const state = yield select();

//     console.log('action', action);
//     console.log('state after', state);
//   });
// }

// worker Saga: will be fired on api call, get notes
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
  Starts fetchNotes on each dispatched `NOTES_FETCH_REQUESTED` action.
  Take the takeLatest fetches of notes.
*/
function* notesFetchRequested() {
  while (true) {
    const fetchTask = yield takeLatest(
      notes.types.NOTES_FETCH_REQUESTED,
      fetchNotes
    );
    const cancelAction = yield take(notes.types.NOTES_FETCH_CANCELLED);
    if (cancelAction.type === notes.types.NOTES_FETCH_CANCELLED)
      yield cancel(fetchTask);
  }
}

// worker Saga: will be fired on api call, get one note
function* fetchNote(action) {
  try {
    const data = yield call(apis.fetchNote, action.payload);
    yield put(notes.noteFetchSucceeded(data));
  } catch (e) {
    yield put(notes.noteFetchFailed(e.message));
  } finally {
    if (yield cancelled()) {
      // yield put(notes.noteFetchFailed('request cancelled'));
    }
  }
}

/*
  Starts fetchNote on each dispatched `NOTES_FETCH_REQUESTED` action.
  Take the takeLatest fetches of notes.
*/
function* noteFetchRequested() {
  while (true) {
    const fetchTask = yield takeLatest(
      notes.types.NOTE_FETCH_REQUESTED,
      fetchNote
    );
    const cancelAction = yield take(notes.types.NOTE_FETCH_CANCELLED);
    if (cancelAction.type === notes.types.NOTE_FETCH_CANCELLED)
      yield cancel(fetchTask);
  }
}

export {
  notesFetchRequested,
  noteFetchRequested
  // , watchAndLog
};
