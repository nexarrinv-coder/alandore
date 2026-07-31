import {  } from 'firebase' 
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDh-4MsyJxUArVr5YgdTvHqNA9avfI_lgQ",
  authDomain: "alandore-health.firebaseapp.com",
  projectId: "alandore-health",
  storageBucket: "alandore-health.firebasestorage.app",
  messagingSenderId: "417541861143",
  appId: "1:417541861143:web:abb865463b289b26595152",
  measurementId: "G-33VNQKWZYS"
}

const firebaseApp = initializeApp(firebaseConfig)
const firebaseAnalytics = getAnalytics(firebaseApp)
const db = getFirestore(firebaseApp)

export {firebaseApp, firebaseAnalytics}

