import React, { Component } from "react";
import "./Home.css";
import {
	// Redirect,
	//Router,
	// Route,
	// Link,
	NavLink
	//HashRouter,
	// BrowserRouter,
	// Switch
} from "react-router-dom";
import {
	app
	//facebookProvider,
	//githubProvider,
	//googleProvider
} from "./firebaseInitApp.js";
import ViewProjects from "./ViewProjects";
import OpenProject from "./OpenProject";

import $ from "jquery";
import "bootstrap-social";

//makes materialize-css work since it needs jquery and imports have to go at the top
window.jQuery = require("jquery");
require("materialize-css");

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: "",
			helpNeeded: "",
			projectDescription: "",
			projectTitle: "",
			Projects: [],
			username: ""
		};
	}

	componentWillMount() {
		//This whole mess of a yolk calls render and displays everything on any change/load of page.
		//Thats as much as I know about it
		this.firebaseRef = app.database().ref("/Projects");
		this.firebaseRef.limitToLast(10).on(
			"value",
			function(dataSnapshot) {
				var Projects = [];

				dataSnapshot.forEach(
					function(childSnapshot) {
						var item = childSnapshot.val();
						item[".key"] = childSnapshot.key;
						// console.log(childSnapshot.val());
						item.id = item[".key"];
						Projects.push(item);
					}.bind(this)
				);
				this.setState({
					Projects: Projects
				});
			}.bind(this)
		);
	}

	componentWillUnmount() {
		this.firebaseRef.off();
	}

	render() {
		const Projects = this.state.Projects;
		//Mapping each project to a variable

		const proj = Projects.map(project => (
			<tr>
				<td key={project.key}>{project.username}</td>
				<td key={project.key}>{project.projectTitle}</td>
				<td key={project.key}>{project.projectDescription}</td>
				<td key={project.key}>{project.helpNeeded}</td>
				{/* <td key={project.key}>{project.id}</td> */}
				<td>
					<NavLink
						className="btn-large waves-effect waves-light"
						to={"/openproject/" + project.id}
					>
						{" "}
						{/* <-- REF. from OpenProject.js */}
						Open project
					</NavLink>
				</td>
			</tr>
		)).reverse();

		return (
			<div className="Home">
				<header>
					<div className="title">
						<h1>Home</h1>
					</div>
				</header>
				<div className="row">
					<div className="bordered col s12 m6">
						<table className="bordered centered responsive-table">
							<thead>
								<tr>
									<th> Left panel with filters etc.</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										{/*where our content(views) will load into*/}
										<NavLink
											className="btn-large waves-effect waves-light"
											to="/addproject"
										>
											Add project
										</NavLink>
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					{/* The way of adding project into user's feed should be automatic 
				and be done in a different way(I think through class states) */}
					<div className="col s12 m6">
						<table className="bordered centered highlighted responsive-table">
							<thead>
								<tr>
									<th>Username</th>
									<th>Project Title</th>
									<th>Project Description</th>
									<th>Help Needed</th>
								</tr>
							</thead>
							<tbody>{proj}</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
