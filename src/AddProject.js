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
			if (email.charAt(i) === "@") {
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
						<h1>{this.props.title}</h1>
					</div>
				</div>
				<div className="container row hoverable z-depth-1">
					<form onSubmit={this.handleSubmit} id="js-form" className="col s12">
						<div className="input-field col s12">
							<i className="material-icons prefix">title</i>
							<input
								type="text"
								id="projectTitle"
								name="projectTitle"
								onChange={this.handleChange}
								value={this.state.projectTitle}
								required
							/>
							<label htmlFor="text">
								<b>Project Title:</b>
							</label>
						</div>
						<div className="input-field col s12">
							<i className="material-icons prefix">description</i>
							<input
								type="text"
								id="projectDescription"
								name="projectDescription"
								onChange={this.handleChange}
								value={this.state.projectDescription}
								required
							/>
							<label htmlFor="text">
								<b>Project Description:</b>
							</label>
						</div>
						<div className="input-field col s12">
							<i className="material-icons prefix">help_outline</i>
							<input
								type="text"
								id="helpNeeded"
								name="helpNeeded"
								onChange={this.handleChange}
								value={this.state.helpNeeded}
								required
							/>
							<label htmlFor="text">
								<b>Help Needed:</b>
							</label>
						</div>
						<button
							type="submit"
							className="btn-large waves-effect waves-light"
						>
							Add Project
							<i className="material-icons right">add</i>
						</button>
					</form>
				</div>
			</div>
		);
	}
}
export default AddProject;
