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

export const types = {
  NOTES_FETCH_REQUESTED: 'NOTES_FETCH_REQUESTED',
  NOTES_FETCH_SUCCEEDED: 'NOTES_FETCH_SUCCEEDED',
  NOTES_FETCH_FAILED: 'NOTES_FETCH_FAILED'
};

export default {
  notesFetchRequested,
  notesFetchSucceeded,
  notesFetchFailed,
  types
};
