import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUeGGgA0Xq0C6vypEiOQ0KlL4XRj5XeFs",
  authDomain: "todoist-clone-b2508.firebaseapp.com",
  databaseURL: "https://todoist-clone-b2508.firebaseio.com",
  projectId: "todoist-clone-b2508",
  storageBucket: "todoist-clone-b2508.appspot.com",
  messagingSenderId: "793981497551",
  appId: "1:793981497551:web:e742d9d64f77a821f787ba",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export { firebaseApp as firebase };
