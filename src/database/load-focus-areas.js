import firebaseDB from './firebase-db'

export async function loadFocusAreas () {
  return transformSnapshot(await firebaseDB.ref('/focusAreas').once('value'))
}

export function onChange (cb) {
  firebaseDB.ref('/focusAreas').on('value', function (snapshot) {
    cb(transformSnapshot(snapshot))
  })
}

function transformSnapshot (snapshot) {
  const snapshotVal = snapshot.val()
  return Object.keys(snapshotVal).map(key => Object.assign({id: key}, snapshotVal[key]))
}
