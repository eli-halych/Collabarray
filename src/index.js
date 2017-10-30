import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

// // Initialize Firebase
// var config = {
// 	apiKey: "AIzaSyCvV09DtCgNoshpAXot5V0dMLeD-Dfhwp8",
// 	authDomain: "collabarray-953db.firebaseapp.com",
// 	databaseURL: "https://collabarray-953db.firebaseio.com",
// 	projectId: "collabarray-953db",
// 	storageBucket: "collabarray-953db.appspot.com",
// 	messagingSenderId: "978577647128"
// };
// firebase.initializeApp(config);







ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
