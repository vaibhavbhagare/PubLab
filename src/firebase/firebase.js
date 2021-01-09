import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

import FirebaseContext from './context';
import { firebaseConfig } from '../config/config';



const secondaryApp = firebase.initializeApp(firebaseConfig, 'Secondary');

// Create user with firebase auth
export const createNewUser = (email, password) => {
  return secondaryApp
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(({ user }) => {
      secondaryApp.auth().signOut();
      return user;
    });
};

// Create or update a user document
export const createUserProfileDocument = async ({
  uid,
  email,
  name,
  role,
  created_by
}) => {
  const userRef = firestore.doc(`users/${uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    // Create new user
    const created_at = new Date();

    try {
      await userRef.set({
        email,
        name,
        role,
        created_at,
        created_by
      });
    } catch (error) {
      console.log(error.message);
    }
  } else {
    // Update user
    const last_logged_in = new Date();

    try {
      await userRef.update({
        last_logged_in
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return userRef;
};




firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export { FirebaseContext };

export default firebase;