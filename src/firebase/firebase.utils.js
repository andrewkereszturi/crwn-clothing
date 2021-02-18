import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCpL6m7ik9YDoC7UXMPAsKptwr0sPTnsbE",
  authDomain: "crwn-db-59c11.firebaseapp.com",
  projectId: "crwn-db-59c11",
  storageBucket: "crwn-db-59c11.appspot.com",
  messagingSenderId: "429558143928",
  appId: "1:429558143928:web:1fa4a74d946a8d8c2e4d4d",
  measurementId: "G-B947F732PG"
}

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;