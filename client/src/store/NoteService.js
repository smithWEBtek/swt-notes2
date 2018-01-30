// const API_URL = process.env.REACT_APP_API_URL

const NoteService = {

  fetchNotes: () => {
    // return fetch(`${API_URL}/notes`)
    return fetch(`http://localhost:3001/api/notes`)
      .then(response => response.json())
  },

  updateNote(data) {
    const request = {
      method: 'PATCH',
      body: JSON.stringify({ note: data }),
      headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`http://localhost:3001/api/notes/${data.id}`, request)
      .then(response => {
        console.log('[NoteService][updateNote]response:', response.json())
      })
  },

  createNote(data, history) {
    const request = {
      method: 'POST',
      body: JSON.stringify({ note: data }),
      headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`http://localhost:3001/api/notes`, request)
      .then(response => {
        console.log('[NoteService][createNote]response:', response.json())
      })
  },

  deleteNote(id) {
    const request = {
      method: 'DELETE',
      body: JSON.stringify({ id: id }),
      headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`http://localhost:3001/api/notes/${id}`, request)
      .then(response => {
        console.log('[NoteService][deleteNote]response:', response.status)
      })
  }
}

export default NoteService