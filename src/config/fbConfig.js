import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyBARodU8OsTW1C16B51g3hijC5ZudcNN4E",
  authDomain: "news-ffcf3.firebaseapp.com",
  databaseURL: "https://news-ffcf3.firebaseio.com",
  projectId: "news-ffcf3",
  storageBucket: "news-ffcf3.appspot.com",
  messagingSenderId: "805455632565"
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const storage = firebase.storage();

export default firebase;