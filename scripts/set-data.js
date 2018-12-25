const firebase = require('firebase/app')
require('firebase/database')

// TODO: Replace with your project's config object
var config = {
  apiKey: 'AIzaSyCCsFrnHsoqag9CW7EeY7OZDcj8VWwQnEs',
  authDomain: 'was-today-better.firebaseapp.com',
  databaseURL: 'https://was-today-better.firebaseio.com',
  projectId: 'was-today-better',
  storageBucket: 'was-today-better.appspot.com',
  messagingSenderId: '946780991971'
}
firebase.initializeApp(config)

firebase.database().ref('/focusAreas/0/deleted').set(true);

firebase.database().ref('/focusAreas').once('value').then(function (snapshot) {
  console.log(snapshot.val())
})

