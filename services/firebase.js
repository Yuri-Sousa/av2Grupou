import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBzPXCjml8HwRyLRfl9fjcMlK5KmOCb0OE",
  authDomain: "grupou-39695.firebaseapp.com",
  databaseURL: "https://grupou-39695.firebaseio.com",
  projectId: "grupou-39695",
  storageBucket: "grupou-39695.appspot.com",
  messagingSenderId: "629361155535",
  appId: "1:629361155535:web:aa80527a34969b65df86ba"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
