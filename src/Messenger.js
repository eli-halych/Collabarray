import React, { Component } from "react";

import // Redirect,
//Router,
// Route,
//Link,
// NavLink
//HashRouter,
//BrowserRouter
// Switch
"react-router-dom";
import // app
//facebookProvider,
//githubProvider,
//googleProvider
"./firebaseInitApp.js";
import "materialize-css/dist/css/materialize.min.css";
import "../node_modules/bootstrap-social/bootstrap-social.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
// import $ from "jquery";
import "bootstrap-social";
import firebase from "firebase";
// import { position } from "tether";
import "./Messenger.css";
import Messages from "./Messages";
import ChatInput from "./ChatInput";

window.jQuery = require("jquery");
require("materialize-css");

// Retrieve Firebase Messaging object.
const messaging = firebase.messaging();
messaging
	.requestPermission()
	.then(function() {
		console.log("Notification permission granted.");
		// TODO(developer): Retrieve an Instance ID token for use with FCM.
		// ...
	})
	.catch(function(err) {
		console.log("Unable to get permission to notify.", err);
	});

class Messenger extends Component {
	constructor(props) {
		super(props);
		this.state = { messages: [] };
		this.sendHandler = this.sendHandler.bind(this);
	}

	sendHandler(message) {
		const messageObject = {
			username: this.props.username,
			message
		};

		messageObject.fromMe = true;
		this.addMessage(messageObject);
	}

	addMessage(message) {
		// Append the message to the component state
		const messages = this.state.messages;
		messages.push(message);
		this.setState({ messages });
	}

	render() {
		return (
			<div className="Messenger">
				<div className="header-back z-depth-1">
					<div className="page-header">
						<h1>{this.props.title}</h1>
					</div>
				</div>
				<div className="container z-depth-1 hoverable">
					<Messages messages={this.state.messages} />
					<ChatInput onSend={this.sendHandler} />
				</div>
			</div>
		);
	}
}
Messenger.defaultProps = {
	username: "Anonymous"
};
export default Messenger;
