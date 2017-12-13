import firebase from "firebase";
import messaging from "firebase";
var config = {
	apiKey: "AIzaSyCvV09DtCgNoshpAXot5V0dMLeD-Dfhwp8",
	authDomain: "collabarray-953db.firebaseapp.com",
	databaseURL: "https://collabarray-953db.firebaseio.com",
	projectId: "collabarray-953db",
	storageBucket: "collabarray-953db.appspot.com",
	messagingSenderId: "978577647128"
};
const app = firebase.initializeApp(config);
const messaging = firebase.messaging();

messaging,
	onMessage(payload => {
		console.log("onMessage: ", payload);
	});
