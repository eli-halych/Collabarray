import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";
import {
	app
	//facebookProvider,
	//githubProvider,
	//googleProvider
} from "./firebaseInitApp.js";
import {
	// Redirect,
	//Router,
	// Route,
	//Link,
	NavLink
	//HashRouter,
	//BrowserRouter
	// Switch
} from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "../node_modules/bootstrap-social/bootstrap-social.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./ViewProjects.css";
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
		$(document).ready(() => {
			$(".tooltipped").tooltip({ delay: 50 });
		});
	}
	componentDidUpdate() {
		$(".tooltipped").tooltip({ delay: 50 });
	}
	componentWillMount() {}

	componentDidMount() {
		//This whole mess of a yolk calls render and displays everything on any change/load of page.
		//Thats as much as I know about it
		this.firebaseRef = app.database().ref("/Projects");
		this.firebaseRef.on(
			"value",
			function(dataSnapshot) {
				var Projects = [];

				dataSnapshot.forEach(function(childSnapshot) {
					var item = childSnapshot.val();
					item[".key"] = childSnapshot.key;
					item.id = item[".key"];
					Projects.push(item);
				});
				this.setState({
					Projects: Projects
				});
			}.bind(this)
		);
	}

	componentWillUnmount() {
		this.firebaseRef.off();
		$(".tooltipped").tooltip("remove");
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
						className="btn-large btn-flat waves-effect waves-light tooltipped"
						to={"/openproject/" + project.id}
						data-position="bottom"
						data-tooltip="Open Project"
					>
						{" "}
						{/* <-- REF. from OpenProject.js */}
						<i className="material-icons">folder_open</i>{" "}
					</NavLink>
				</td>
			</tr>
		)).reverse();

		// pretty display for projects :)
		return (
			<div className="ViewProject">
				<div className="header-back z-depth-1">
					<div className="page-header">
						<h1>Project Wall</h1>
					</div>
				</div>
				<div className="container row hoverable z-depth-1">
					<div className="col s12">
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
export default ViewProjects;
