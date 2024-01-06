// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJJ4osg5yLylMSHDlDgaBttCFs6TN769w",
  authDomain: "animebox-4718f.firebaseapp.com",
  projectId: "animebox-4718f",
  storageBucket: "animebox-4718f.appspot.com",
  messagingSenderId: "573490260517",
  appId: "1:573490260517:web:b03e14e89052f70ea02dcc",
  measurementId: "G-PZ8GLQP97F"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);