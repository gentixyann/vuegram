import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyAESa45ZO14tPgO3gNO3TJZm360OYes_ro",
    authDomain: "vuegram-747c0.firebaseapp.com",
    projectId: "vuegram-747c0",
    storageBucket: "vuegram-747c0.appspot.com",
    messagingSenderId: "1069905293642",
    appId: "1:1069905293642:web:cb4f53839058464828d1b3",
    measurementId: "G-574RVJVMWP"
}
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const usersCollection = db.collection('users');
const postsCollection = db.collection('posts');
const commentsCollection = db.collection('comments');
const likesCollection = db.collection('likes');

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}