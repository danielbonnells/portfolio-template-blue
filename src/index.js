import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/*import firebase from 'firebase/app';
import database from 'firebase/database';

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCtSmk8_BYEnZzCqMaHlBP33ZPLYx3jNyA",
    authDomain: "danielbonnells-projects.firebaseapp.com",
    databaseURL: "https://danielbonnells-projects.firebaseio.com",
    projectId: "danielbonnells-projects",
    storageBucket: "",
    messagingSenderId: "946439793000"
  };
  firebase.initializeApp(config);*/

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
