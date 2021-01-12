import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDz20tLW35cJ2h6ZdwSogcJBVMdRS5W-64",
  authDomain: "snapchat-clone-874b6.firebaseapp.com",
  projectId: "snapchat-clone-874b6",
  storageBucket: "snapchat-clone-874b6.appspot.com",
  messagingSenderId: "152503487424",
  appId: "1:152503487424:web:8d64cd028e1e9f890a5625",
  measurementId: "G-DQRTDHDM70",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
