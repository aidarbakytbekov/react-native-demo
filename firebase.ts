import {initializeApp} from 'firebase/app';
import {signOut} from './firebase';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {getFirestore} from '@firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyBOuPaB8je3CshPIzyKvaCZfiruSJh1oM4',
  authDomain: 'native-demo-d283d.firebaseapp.com',
  projectId: 'native-demo-d283d',
  storageBucket: 'native-demo-d283d.appspot.com',
  messagingSenderId: '517912737821',
  appId: '1:517912737821:web:6d5f4d1c83f30b82cb2ef4',
  measurementId: 'G-P7JE31M970',
};

initializeApp(firebaseConfig);
export const auth = getAuth();

export const register = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
export const login = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => signOut(auth);

export const db = getFirestore();
