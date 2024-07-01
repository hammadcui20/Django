// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZhRUWFtY4BB3YMUWq1gKVGpbPL0LnXic",
  authDomain: "django-a564f.firebaseapp.com",
  databaseURL: "https://django-a564f-default-rtdb.firebaseio.com",
  projectId: "django-a564f",
  storageBucket: "django-a564f.appspot.com",
  messagingSenderId: "2212571966",
  appId: "1:2212571966:web:741ba4c0185a6447605a6f",
  measurementId: "G-HFP6JPQ5FQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const database = getDatabase(app);
