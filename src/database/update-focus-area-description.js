import firebaseDB from './firebase-db'
import {getCurrentUser} from '../auth/auth'

export default ({id, name}) => firebaseDB.ref(`/${getCurrentUser()}/focusAreas/${id}/name`).set(name)
