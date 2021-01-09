import firebase from 'firebase';
import { firebaseConfig } from '../config/config';

firebase.initializeApp(firebaseConfig);
export default firebase;