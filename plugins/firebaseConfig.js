import firebase from 'firebase/app'
import 'firebase/firestore'
// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyD-9Fh2saU3HoUKCQqbDSSnlx6oENZk9kU',
    authDomain: 'datareview-4347c.firebaseapp.com',
    databaseURL: 'https://datareview-4347c.firebaseio.com',
    projectId: 'datareview-4347c',
    storageBucket: 'datareview-4347c.appspot.com',
    messagingSenderId: '505049631179',
    appId: '1:505049631179:web:c91683b7b2f67a556f0e4e',
    measurementId: 'G-RXP8BFZJ76'
  }
  firebase.initializeApp(firebaseConfig)
}
export const db = firebase.firestore()
