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
import {
	app
	//facebookProvider,
	//githubProvider,
	//googleProvider
} from "./firebaseInitApp.js";
import "materialize-css/dist/css/materialize.min.css";
import "../node_modules/bootstrap-social/bootstrap-social.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./Profile.css";
import $ from "jquery";
import "bootstrap-social";
import { position } from "tether";

//makes materialize-css work since it needs jquery and imports have to go at the top
window.jQuery = require("jquery");
require("materialize-css");

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userFullName: ""
		};
	}

	componentWillMount() {
		var user = app.auth().currentUser;
		// console.log(user)
		var fullName = user.displayName;
		this.state.userFullName = fullName;
	}

	componentWillUnmount() {
		// this.firebaseRef.off();
	}

	render() {
		return (
			<div className="Profile">
				<div className="header-back z-depth-1">
					<div className="page-header">
						{/* it takes /:id which is set in REF. to App.js and specified in REF. to Home.js. The ID is projectTitle so far */}

						<h6>Project id: {this.props.match.params.id}</h6>
						<h1>
							{this.state.userFullName}'s {this.props.title}
						</h1>
					</div>
				</div>
				<div className="row">
					<div className="col s5 offset-s1 container hoverable z-depth-1">
						<table className="bordered centered highlighted">
							<thead>
								<tr>
									<th>Wall</th>
								</tr>
							</thead>
							<tbody>user's stuff</tbody>
						</table>
					</div>

					<div className="col s4 offset-s1 container hoverable z-depth-1">
						<table className="bordered centered highlighted">
							<thead>
								<tr>
									<th>{this.state.userFullName}</th>
								</tr>
							</thead>
							<tbody>user's info</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;
