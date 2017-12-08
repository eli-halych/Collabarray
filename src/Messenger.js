import { Component } from "react";

import // Redirect,
	//Router,
	// Route,
	//Link,
	// NavLink
	//HashRouter,
	//BrowserRouter
	// Switch
	"react-router-dom";
import {
	// app
	//facebookProvider,
	//githubProvider,
	//googleProvider
} from "./firebaseInitApp.js";
import "materialize-css/dist/css/materialize.min.css";
import "../node_modules/bootstrap-social/bootstrap-social.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
// import $ from "jquery";
import "bootstrap-social";
import firebase from "firebase";
// import { position } from "tether";


window.jQuery = require("jquery");
require("materialize-css");


const messaging = firebase.messaging();
messaging.requestPermission()
.then(function() {
  console.log('Have permission');
  return messaging.getToken();
})
.then(function(token){
  console.log(token);
})
.catch(function(err) {
  console.log('Error Occured', err);
})

messaging.onMessage(function(payload){
	console.log('onMessage: ', payload)
});

class Messenger extends Component {}

export default Messenger;