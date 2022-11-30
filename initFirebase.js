import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCmSBhUz5S_Xof-BL48djsPyDO1s0AIWiw',
  authDomain: 'project-vishram.firebaseapp.com/',
  //databaseURL: 'https://project-id.firebaseio.com',
  projectId: 'project-vishram',
  storageBucket: 'http://project-vishram.appspot.com/',
  messagingSenderId: "4539084926",
  appId: "1:4539084926:web:3d55e967e2c85f112ae82f",
  measurementId: 'G-M5STQ7SLM3',
};

const app = firebase.initializeApp(firebaseConfig);

export {app};