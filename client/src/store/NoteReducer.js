import * as actionTypes from './actions';
// import NoteService from './NoteService';

const initialState = {
  notes: [],
  loading: false,
  error: false,
  message: ''
};

const updateObject = (oldObject, updatedValues) => { return { ...oldObject, ...updatedValues } }
const reducer = (state = initialState, action) => {
  switch (action.type) {

    //-----CREATE NOTE-----------------------------
    case actionTypes.CREATE_NOTE:
      const newNote = action.data
      return updateObject(state, { notes: state.notes.concat(newNote) })

    case actionTypes.CREATE_NOTE_START:
      return updateObject(state, { loading: true })

    case actionTypes.CREATE_NOTE_SUCCESS:
      return updateObject(state, { loading: false })

    case actionTypes.CREATE_NOTE_FAIL:
      return updateObject(state, {
        error: action.error,
        loading: false,
        message: action.response
      })


    // //-----DELETE NOTE-----------------------------
    // case actionTypes.DELETE_NOTE:
    //   const updatedNotesArray = state.notes.filter(note => note.id !== action.id);
    //   return updateObject(state, { notes: updatedNotesArray, loading: false })

    // case actionTypes.DELETE_NOTE_SUCCESS:
    //   return updateObject(state, { loading: false })

    // case actionTypes.DELETE_NOTE_FAIL:
    //   return updateObject(state, { error: action.error, loading: false })


    //-----UPDATE NOTE-----------------------------
    // case actionTypes.UPDATE_NOTE:
    //   const noteData = action.updatedNoteData
    //   return NoteService.updateNote(noteData.id, noteData)

    // case actionTypes.UPDATE_NOTE:
    //   const noteData = action.updatedNoteData

    //   const noteIndex = state.notes.findIndex(note => note.id === noteData.id);

    //   const updatedState = {
    //     ...state,
    //     notes: [
    //       ...state.notes.slice(0, noteIndex),
    //       ...state.notes.slice(noteIndex + 1)
    //     ]
    //   };

    //   return updateObject(state, { updatedState })


    // case actionTypes.UPDATE_NOTE_SUCCESS:
    //   return updateObject(state, { loading: false })

    // case actionTypes.UPDATE_NOTE_FAIL:
    //   return updateObject(state, { error: action.error, loading: false })


    // //-----FETCH NOTE-----------------------------
    // case actionTypes.FETCH_NOTE_START:
    //   return updateObject(state, { loading: true })

    // case actionTypes.FETCH_NOTE_SUCCESS:
    //   return updateObject(state, { notes: action.noteData })

    // case actionTypes.FETCH_NOTE_FAIL:
    //   return updateObject(state, { error: action.error })


    //-----FETCH NOTES-----------------------------
    case actionTypes.FETCH_NOTES_START:
      return updateObject(state, { loading: true })

    case actionTypes.FETCH_NOTES_SUCCESS:
      return updateObject(state, { notes: action.notesList.sort((a, b) => (a.id) - (b.id)) })

    case actionTypes.FETCH_NOTES_FAIL:
      return updateObject(state, { error: action.error })

    default:
      return state;
  }
}

export default reducer;
