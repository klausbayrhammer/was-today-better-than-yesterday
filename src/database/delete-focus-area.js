import firebaseDB from './firebase-db'
export default ({id, deleted}) => firebaseDB.ref(`/focusAreas/${id}/deleted`).set(deleted)
