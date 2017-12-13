import firebase from "firebase";
// Initialize Firebase
var config = {
	apiKey: "AIzaSyCvV09DtCgNoshpAXot5V0dMLeD-Dfhwp8",
	authDomain: "collabarray-953db.firebaseapp.com",
	databaseURL: "https://collabarray-953db.firebaseio.com",
	projectId: "collabarray-953db",
	storageBucket: "collabarray-953db.appspot.com",
	messagingSenderId: "978577647128"
};
const app = firebase.initializeApp(config);

// Retrieve Firebase Messaging object.
const messaging = firebase.messaging();
messaging
	.requestPermission()
	.then(function() {
		console.log("Notification permission granted.");
		// TODO(developer): Retrieve an Instance ID token for use with FCM.
		console.log("Have Permission");
		return messaging.getToken();
	})
	.then(token => {
		console.log(token);
	})
	.catch(function(err) {
		console.log("Unable to get permission to notify.", err);
	});

const facebookProvider = new firebase.auth.FacebookAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { app, facebookProvider, githubProvider, googleProvider };
// -------------------
