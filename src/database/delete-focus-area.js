import firebaseDB from './firebase-db'
console.log('x')
export default ({id, deleted}) => firebaseDB.ref(`/focusAreas/${id}/deleted`).set(deleted)
