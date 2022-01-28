// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCPBVD58juGDxxumEuB-PPaeJehHHxRwZk',
  authDomain: 'date-matcher.firebaseapp.com',
  projectId: 'date-matcher',
  storageBucket: 'date-matcher.appspot.com',
  messagingSenderId: '447154072521',
  appId: '1:447154072521:web:f51ee5908afdf873589618',
  measurementId: 'G-XBX5H7GCN4',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const db = getFirestore()
export const collectionReference = collection(db, 'users')
export const getDocsReference = getDocs(collectionReference)
