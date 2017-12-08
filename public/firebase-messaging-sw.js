// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

var config = {
	apiKey: "AIzaSyCvV09DtCgNoshpAXot5V0dMLeD-Dfhwp8",
	authDomain: "collabarray-953db.firebaseapp.com",
	databaseURL: "https://collabarray-953db.firebaseio.com",
	projectId: "collabarray-953db",
	storageBucket: "collabarray-953db.appspot.com",
	messagingSenderId: "978577647128"
};
firebase.initializeApp(config);


const messaging = firebase.messaging();