import React, { Component } from "react";
import { Spinner } from "@blueprintjs/core";
import { app } from "./firebaseInitApp.js";
import {
	Redirect
	//Router,
	//Route,
	//Link,
	// NavLink,
	//HashRouter,
	//BrowserRouter
} from "react-router-dom";
import "./Logout.css";
// import $ from "jquery";
import "bootstrap-social";

//makes materialize-css work since it needs jquery and imports have to go at the top
window.jQuery = require("jquery");
require("materialize-css");

class Logout extends Component {
	constructor() {
		super();
		this.state = {
			redirect: false
		};
	}

	componentWillMount() {
		app
			.auth()
			.signOut()
			.then(user => {
				this.setState({ authenticated: false });
				this.setState({ redirect: true });
			});
	}
	componentWillUnmount() {
		this.setState({ authenticated: false });
	}

	render() {
		return this.state.redirect ? (
			<Redirect to="/signin" />
		) : (
			<div className="logout">
				<h3>Logging out</h3>
				<Spinner />
			</div>
		);
	}
}

export default Logout;
