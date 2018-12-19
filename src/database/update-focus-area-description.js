import firebaseDB from './firebase-db'

export default ({id, name}) => firebaseDB.ref(`/focusAreas/${id}/name`).set(name)
