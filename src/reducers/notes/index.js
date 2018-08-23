import { notes } from '../../actions';

const initialState = {
  notes: [],
  currentNote: undefined,
  hasMoreNotesToLoad: true,
  cursor: 0,
  loadAmount: 20,
  loading: true,
  fetchLoading: false,
  message: ''
};

const findNote = (notes, id) => {
  return notes.filter(note => note.id === id)[0];
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
        loading: false,
        fetchLoading: false
      };
    case notes.types.NOTES_FETCH_CANCELLED:
      return {
        ...state,
        fetchLoading: false
      };
    case notes.types.NOTE_GET_ONE:
      return {
        ...state,
        currentNote: findNote(state.notes, action.payload)
      };
    case notes.types.NOTE_FETCH_REQUESTED:
      return {
        ...state,
        message: '',
        fetchLoading: true
      };
    case notes.types.NOTE_FETCH_SUCCEEDED:
      const note = action.payload;
      return {
        ...state,
        fetchLoading: false,
        loading: state.notes.length ? false : true,
        currentNote: note
      };
    case notes.types.NOTE_FETCH_FAILED:
      return {
        ...state,
        message: action.payload,
        loading: state.notes.length ? false : true,
        fetchLoading: false
      };
    case notes.types.NOTE_FETCH_CANCELLED:
      return {
        ...state,
        fetchLoading: false
      };
    default:
      return state;
  }
};

export default notesReducer;
