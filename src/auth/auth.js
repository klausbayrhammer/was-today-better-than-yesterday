import firebase from 'firebase'

function signInCallback (signInCallback) {
  firebase.auth().onAuthStateChanged(user => signInCallback(!!user))
}

export {signInCallback}
