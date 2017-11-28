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
		this.firebaseRef.limitToLast(3).on(
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

		const proj = Projects.reverse().map(project => (
			<div>
				<p key={project.key}>{project.username}</p>
				<p key={project.key}>{project.projectTitle}</p> {/* <-- unique, can be used as identifier */}
				<p key={project.key}>{project.projectDescription}</p>
				<p key={project.key}>{project.helpNeeded}</p>
				{/* <p key={project.key}>{project.id}</p> */}
				<NavLink className="btn btn-primary btn-lg" to={"/openproject/" + project.id}> {/* <-- REF. from OpenProject.js */}
							Open project
				</NavLink>
				<hr />
			</div>
		));


		return (
			<div className="Home">
				<header>
					<div className="title">
						<h1>Home</h1>
					</div>
				</header>
				<div className="row">
					<div className="border col m6">
						<hr />
						Left panel with filters etc.
						<hr />
						{/*where our content(views) will load into*/}
						<NavLink className="btn btn-primary btn-lg" to="/addproject">
							Add project
						</NavLink>
						<hr />
					</div>

					{/* The way of adding project into user's feed should be automatic 
				and be done in a different way(I think through class states) */}
					<div className="border col m6">
						{proj}
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
