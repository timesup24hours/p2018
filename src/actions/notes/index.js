// notes fetch
export const notesFetchRequested = payload => ({
  type: types.NOTES_FETCH_REQUESTED,
  payload
});

export const notesFetchSucceeded = payload => ({
  type: types.NOTES_FETCH_SUCCEEDED,
  payload
});

export const notesFetchFailed = payload => ({
  type: types.NOTES_FETCH_FAILED,
  payload
});

export const notesFetchCancelled = () => ({
  type: types.NOTES_FETCH_CANCELLED
});

// get on note
export const noteGetOne = payload => ({
  type: types.NOTE_GET_ONE,
  payload
});

// fetch one note
export const noteFetchRequested = payload => ({
  type: types.NOTE_FETCH_REQUESTED,
  payload
});

export const noteFetchSucceeded = payload => ({
  type: types.NOTE_FETCH_SUCCEEDED,
  payload
});

export const noteFetchFailed = payload => ({
  type: types.NOTE_FETCH_FAILED,
  payload
});

export const noteFetchCancelled = () => ({
  type: types.NOTE_FETCH_CANCELLED
});

export const types = {
  NOTES_FETCH_REQUESTED: 'NOTES_FETCH_REQUESTED',
  NOTES_FETCH_SUCCEEDED: 'NOTES_FETCH_SUCCEEDED',
  NOTES_FETCH_FAILED: 'NOTES_FETCH_FAILED',
  NOTES_FETCH_CANCELLED: 'NOTES_FETCH_CANCELLED',
  NOTE_GET_ONE: 'NOTE_GET_ONE',
  NOTE_FETCH_REQUESTED: 'NOTE_FETCH_REQUESTED',
  NOTE_FETCH_SUCCEEDED: 'NOTE_FETCH_SUCCEEDED',
  NOTE_FETCH_FAILED: 'NOTE_FETCH_FAILED',
  NOTE_FETCH_CANCELLED: 'NOTE_FETCH_CANCELLED'
};

export default {
  notesFetchRequested,
  notesFetchSucceeded,
  notesFetchFailed,
  notesFetchCancelled,
  noteGetOne,
  noteFetchRequested,
  noteFetchSucceeded,
  noteFetchFailed,
  noteFetchCancelled,
  types
};
