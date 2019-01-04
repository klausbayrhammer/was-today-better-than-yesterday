import firebase from 'firebase'

let loggedInUser

function signInCallback (signInCallback) {
  firebase.auth().onAuthStateChanged(user => {
    loggedInUser = user
    return signInCallback(!!user)
  })
}

function getCurrentUser () {
  return loggedInUser.uid
}

export {signInCallback, getCurrentUser}
