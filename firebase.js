// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyC2uX2VBE90pyX-3tNvHW_lDz7uT2B2r1I',
    authDomain: 'stories-made-simple-2f1b9.firebaseapp.com',
    projectId: 'stories-made-simple-2f1b9',
    storageBucket: 'stories-made-simple-2f1b9.appspot.com',
    messagingSenderId: '374509547066',
    appId: '1:374509547066:web:aaca6f753cb08226de0f03',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth()
const provider = new GoogleAuthProvider()

export { app, auth, provider }
