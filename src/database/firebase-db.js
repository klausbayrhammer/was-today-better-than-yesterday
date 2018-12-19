import firebaseDb from 'firebase'

// TODO: Replace with your project's config object
var config = {
  apiKey: 'AIzaSyCCsFrnHsoqag9CW7EeY7OZDcj8VWwQnEs',
  authDomain: 'was-today-better.firebaseapp.com',
  databaseURL: 'https://was-today-better.firebaseio.com',
  projectId: 'was-today-better',
  storageBucket: 'was-today-better.appspot.com',
  messagingSenderId: '946780991971'
}
firebaseDb.initializeApp(config)

export default firebaseDb.database()

// database.ref('/focusAreas').once('value').then(function (snapshot) {
//   console.log(snapshot.val())
// })
//
// console.log('xxxx')
