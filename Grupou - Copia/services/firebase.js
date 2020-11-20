import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAOvzDn6O3DOSFmSUmhIWAyB2ZyE5SV5rU",
  authDomain: "grupou-a0a3f.firebaseapp.com",
  databaseURL: "https://grupou-a0a3f.firebaseio.com",
  projectId: "grupou-a0a3f",
  storageBucket: "grupou-a0a3f.appspot.com",
  messagingSenderId: "35575378999",
  appId: "1:35575378999:web:b92dc0ad3637cf73d3bbb2"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
