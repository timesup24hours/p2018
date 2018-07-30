import { notes } from '../../actions';

const initialState = {
  notes: [],
  hasMoreNotesToLoad: true,
  cursor: 0,
  loadAmount: 20,
  loading: true,
  fetchLoading: false,
  message: ''
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case notes.types.NOTES_FETCH_REQUESTED:
      return {
        ...state,
        message: '',
        fetchLoading: true
      };
    case notes.types.NOTES_FETCH_SUCCEEDED:
      const buffer = [...state.notes].concat(action.payload);
      return {
        ...state,
        notes: buffer,
        cursor: buffer.length - 1,
        loading: false,
        fetchLoading: false,
        hasMoreNotesToLoad: action.payload.length === state.loadAmount
      };
    case notes.types.NOTES_FETCH_FAILED:
      return {
        ...state,
        message: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default notesReducer;
