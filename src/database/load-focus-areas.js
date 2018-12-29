import firebaseDB from './firebase-db'
import {getCurrentUser} from '../auth/auth'

export function onChange (cb) {
  firebaseDB.ref(`/${getCurrentUser()}/focusAreas`).on('value', function (snapshot) {
    cb(transformSnapshot(snapshot))
  })
}

function transformSnapshot (snapshot) {
  const snapshotVal = snapshot.val() || {}
  return Object.keys(snapshotVal).map(key => Object.assign({id: key}, snapshotVal[key]))
}
