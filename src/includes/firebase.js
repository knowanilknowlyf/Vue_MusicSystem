import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
  apiKey: 'AIzaSyA2Gq059E8Sk12CyvesDlWHiLg1uuTDI7s',
  authDomain: 'music-254ed.firebaseapp.com',
  projectId: 'music-254ed',
  storageBucket: 'music-254ed.appspot.com',
  messagingSenderId: '54569085193',
  appId: '1:54569085193:web:45ada2106096cd0f8e8bd8',
  measurementId: 'G-04Q3F9BVKL'
}
firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

const userCollection = db.collection('users')
const songsCollection = db.collection('songs')
export { auth, db, userCollection,storage,songsCollection }
