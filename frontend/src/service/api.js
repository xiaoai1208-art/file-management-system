import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/api'
})


export const getNotes = () => {
  return api.get('/notes')
}


export const createNote = (note) => {
  return api.post('/notes', note)
}


export const updateNote = (id, note) => {
  return api.put(`/notes/${id}`, note)
}


export const deleteNote = (id) => {
  return api.delete(`/notes/${id}`)
}