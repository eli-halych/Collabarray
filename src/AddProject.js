import React, { Component } from "react";
import "./SignIn.css";
import "../node_modules/bootstrap-social/bootstrap-social.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
// import firebase from 'firebase';
import {
	app
	//facebookProvider,
	//githubProvider,
	//googleProvider
} from "./firebaseInitApp.js";

//makes bootstrap.js work since it needs jquery and imports have to go at the top
window.jQuery = require("jquery");
require("bootstrap");

class AddProject extends Component {
	constructor() {
		super();
		this.state = {
			helpNeeded: "",
			projectDescription: "",
			projectTitle: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();
		const itemsRef = app.database().ref("Projects");
		const item = {
			helpNeeded: this.state.helpNeeded,
			projectDescription: this.state.projectDescription,
			projectTitle: this.state.projectTitle
		};
		itemsRef.push(item);
		this.setState({
			helpNeeded: "",
			projectDescription: "",
			projectTitle: ""
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
				<header>
					<div className="wrAddProjecter">
						<h1>Add Project</h1>
					</div>
				</header>
				<div className="container">
					<section className="add-item">
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
							<button>Add Project</button>
						</form>
					</section>
				</div>
			</div>
		);
	}
}
export default AddProject;
