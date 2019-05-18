let firebase = require("firebase");

var firebaseConfig = {
  apiKey: "AIzaSyAmMipweRIdbckx3VvKo8m2OJmyIf8NejI",
  authDomain: "coderhousefullstack.firebaseapp.com",
  databaseURL: "https://coderhousefullstack.firebaseio.com",
  projectId: "coderhousefullstack",
  storageBucket: "coderhousefullstack.appspot.com",
  messagingSenderId: "120813811046",
  appId: "1:120813811046:web:126d62a9a61b99cd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
