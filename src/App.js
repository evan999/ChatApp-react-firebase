import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDcyP68Zjdsr6IwmOHh9H_4Y84IAoX9q7c",
  authDomain: "chatterbox-chatapp.firebaseapp.com",
  projectId: "chatterbox-chatapp",
  storageBucket: "chatterbox-chatapp.appspot.com",
  messagingSenderId: "155051536221",
  appId: "1:155051536221:web:14d1f6da9df483f45582b4",
  measurementId: "G-W8H7NN4C44"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider
    auth.signInWithPopup(provider);
  }

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}
export default App;
