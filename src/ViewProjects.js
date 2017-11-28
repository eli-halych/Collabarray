import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";
import {
	app
	//facebookProvider,
	//githubProvider,
	//googleProvider
} from "./firebaseInitApp.js";
import // Redirect,
//Router,
// Route,
//Link,
// NavLink
//HashRouter,
//BrowserRouter
// Switch
"react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "../node_modules/bootstrap-social/bootstrap-social.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./OpenProject.css";
import $ from "jquery";
import "bootstrap-social";

//makes materialize-css work since it needs jquery and imports have to go at the top
window.jQuery = require("jquery");
require("materialize-css");

class ViewProjects extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
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

		const proj = Projects.reverse().map(Projects => (
			<div>
				<p key={Projects.key}>{Projects.username}</p>
				<p key={Projects.key}>{Projects.projectTitle}</p>
				<p key={Projects.key}>{Projects.projectDescription}</p>
				<p key={Projects.key}>{Projects.helpNeeded}</p>
				<br />
			</div>
		));

		//We need to make a div thing to make some sort of pretty display here.
		return (
			<div>
				<div class="header-back z-depth-1">
					<div class="page-header">
						<h1>Project Wall</h1>
					</div>
				</div>
				{proj}
			</div>
		);
	}
}
export default ViewProjects;
