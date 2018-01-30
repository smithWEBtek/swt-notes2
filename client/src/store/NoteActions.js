import * as actions from './actions'
import NoteService from './NoteService'

//-----CREATE NOTE ACTIONS-----------------------------
export const createNoteStart = () => {
  return { type: actions.CREATE_NOTE_START }
}
export const createNoteSuccess = () => {
  return { type: actions.CREATE_NOTE_SUCCESS }
}
export const createNoteFail = (error) => {
  return { type: actions.CREATE_NOTE_FAIL, error: error }
}
export const createNote = (data, history) => {
  return dispatch => {
    dispatch(createNoteStart())
    NoteService.createNote(data, history)
      .then(response => {
        dispatch({ type: actions.CREATE_NOTE, data: response })

        history.push('/')

        dispatch(createNoteSuccess())
      })
      .catch(error => {
        dispatch(createNoteFail(error))
      })
  }
}

//-----DELETE NOTE ACTIONS-----------------------------
export const deleteNoteStart = () => {
  return { type: actions.DELETE_NOTE_START }
}
export const deleteNoteSuccess = () => {
  return { type: actions.DELETE_NOTE_SUCCESS }
}
export const deleteNoteFail = (error) => {
  return { type: actions.DELETE_NOTE_FAIL, error: error }
}
export const deleteNote = (id) => {
  return dispatch => {
    dispatch(deleteNoteStart())
    NoteService.deleteNote(id)
      .then(response => {
        dispatch({ type: actions.DELETE_NOTE, id: id })
        dispatch({ type: actions.DELETE_NOTE_SUCCESS, message: response })
      })
      .catch(error => {
        dispatch({ type: actions.DELETE_NOTE_FAIL, error: error })
      })
  }
}


//-----UPDATE NOTE ACTIONS-----------------------------
export const updateNoteStart = () => {
  return { type: actions.UPDATE_NOTE_START }
}
export const updateNoteSuccess = () => {
  return { type: actions.UPDATE_NOTE_SUCCESS }
}
export const updateNoteFail = (error) => {
  return { type: actions.UPDATE_NOTE_FAIL, error: error }
}
export const updateNote = (data, history) => {
  return dispatch => {
    dispatch(updateNoteStart())
    NoteService.updateNote(data, history)
      .then(response => {
        dispatch({ type: actions.UPDATE_NOTE_SUCCESS })
        dispatch(updateNoteSuccess(response))

        // history.push('/notes')
        history.location = '/notes'

        dispatch(fetchNotes())
      })
      .catch(error => {
        dispatch(updateNoteFail(error))
      })
  }
}


//-----FETCH NOTE ACTIONS-----------------------------
export const fetchNoteStart = () => {
  return { type: actions.FETCH_NOTE_START }
}
export const fetchNoteSuccess = (student) => {
  return { type: actions.FETCH_NOTE_SUCCESS, studentData: student }
}
export const fetchNoteFail = (error) => {
  return { type: actions.FETCH_NOTE_FAIL, error: error }
}
export const fetchNote = (id) => {
  return dispatch => {
    dispatch(fetchNoteStart())
    NoteService.fetchNote(id)
      .then(response => {
        dispatch(fetchNoteSuccess(response))
      })
      .catch(error => {
        dispatch(fetchNoteFail(error))
      })
  }
}

//-----INDEX NOTES ACTIONS-----------------------------
export const fetchNotes = () => {
  return dispatch => {
    dispatch(fetchNotesStart())
    NoteService.fetchNotes()
      .then(response => {
        dispatch(fetchNotesSuccess(response))
      })
      .catch(error => {
        dispatch(fetchNotesFail(error))
      })
  }
}

export const fetchNotesStart = () => {
  return { type: actions.FETCH_NOTES_START }
}

export const fetchNotesSuccess = (notes) => {
  return { type: actions.FETCH_NOTES_SUCCESS, notesList: notes }
}

export const fetchNotesFail = (error) => {
  return { type: actions.FETCH_NOTES_FAIL, error: error }
}
