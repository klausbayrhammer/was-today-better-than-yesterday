import firebase from 'firebase/app'
import 'firebase/database'

firebase.initializeApp(process.env.FIREBASE_CONFIG)

export default firebase.database()
