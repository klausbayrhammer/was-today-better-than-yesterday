import firebaseDB from './firebase-db'

const today = new Date().toISOString().split('T')[0]

export default ({id, value}) => firebaseDB.ref(`/focusAreas/${id}/entries/${today}`).set(value)
