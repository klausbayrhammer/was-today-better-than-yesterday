import firebaseDB from './firebase-db'
import {getCurrentUser} from '../auth/auth'

const today = new Date().toISOString().split('T')[0]

export default ({id, value}) => firebaseDB.ref(`/${getCurrentUser()}/focusAreas/${id}/entries/${today}`).set(value)
