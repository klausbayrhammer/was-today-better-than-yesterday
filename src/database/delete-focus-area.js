import firebaseDB from './firebase-db'
import {getCurrentUser} from '../auth/auth'
export default ({id, deleted}) => firebaseDB.ref(`/${getCurrentUser()}/focusAreas/${id}/deleted`).set(deleted)
