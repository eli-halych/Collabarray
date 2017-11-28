import React, { Component } from "react";

import "materialize-css/dist/css/materialize.min.css";
import "../node_modules/bootstrap-social/bootstrap-social.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./AddProject.css";
// import firebase from 'firebase';
import {
	app
	//facebookProvider,
	//githubProvider,
	//googleProvider
} from "./firebaseInitApp.js";

import $ from "jquery";
import "bootstrap-social";

//makes materialize-css work since it needs jquery and imports have to go at the top
window.jQuery = require("jquery");
require("materialize-css");

class AddProject extends Component {
	constructor() {
		super();
		this.state = {
			helpNeeded: "",
			projectDescription: "",
			projectTitle: "",
			username: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();

		const itemsRef = app.database().ref("Projects");
		var user = app.auth().currentUser;
		var email = user.email;
		for (var i = 0; i < 100; i++) {
			if (email.charAt(i) == "@") {
				email = email.substring(0, i);
			}
		}
		const item = {
			helpNeeded: this.state.helpNeeded,
			projectDescription: this.state.projectDescription,
			projectTitle: this.state.projectTitle,
			username: email
		};
		itemsRef.push(item);
		this.setState({
			helpNeeded: "",
			projectDescription: "",
			projectTitle: "",
			username: ""
		});
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	render() {
		return (
			<div className="AddProject">
				<div className="header-back z-depth-1">
					<div className="page-header">
						<h1>Add Project</h1>
					</div>
				</div>
				<div className="container grey darken-4">
					<section className="add-item grey darken-4">
						<form onSubmit={this.handleSubmit}>
							<input
								type="text"
								name="projectTitle"
								placeholder="Project Title"
								onChange={this.handleChange}
								value={this.state.projectTitle}
							/>
							<input
								type="text"
								name="projectDescription"
								placeholder="Project Description"
								onChange={this.handleChange}
								value={this.state.projectDescription}
							/>
							<input
								type="text"
								name="helpNeeded"
								placeholder="Help Needed for Project"
								onChange={this.handleChange}
								value={this.state.helpNeeded}
							/>
							<br />
							<button className="btn waves-effect waves-light">
								Add Project
							</button>
						</form>
					</section>
				</div>
			</div>
		);
	}
}
export default AddProject;
