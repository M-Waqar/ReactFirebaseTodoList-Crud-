import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDRVbC87ftJ1ODAt72yve6pSefsQ-jphVE",
  authDomain: "todolist-189f0.firebaseapp.com",
  projectId: "todolist-189f0",
  storageBucket: "todolist-189f0.appspot.com",
  messagingSenderId: "82846660980",
  appId: "1:82846660980:web:3b94c9b80f1aea9c8a9421",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
