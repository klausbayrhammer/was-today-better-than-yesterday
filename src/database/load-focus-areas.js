import firebaseDB from './firebase-db'

export default async () => {
  const snapshot = await firebaseDB.ref('/focusAreas').once('value')
  const snapshotVal = snapshot.val()
  return Object.keys(snapshotVal).map(key => Object.assign({id: key}, snapshotVal[key]))
}
