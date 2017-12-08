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
		this.firebaseRef.limitToLast(10).on(
			"value",
			function(dataSnapshot) {
				var Projects = [];

				dataSnapshot.forEach(function(childSnapshot) {
					var item = childSnapshot.val();
					item[".key"] = childSnapshot.key;
					// console.log(childSnapshot.val());
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

		return (
			<div className="Home">
				<div className="header-back z-depth-1">
					<div className="page-header">
						<h1>{this.props.title}</h1>
					</div>
				</div>
				{/* Modal Trigger */}
				<div class="fixed-action-btn click-to-toggle ">
					<a
						className="btn-large btn-floating waves-effect waves-light tooltipped modal-trigger"
						to="/addproject"
						data-position="left"
						data-tooltip="Filter"
						href="#modal1"
					>
						<i className="material-icons">filter_list</i>
					</a>
				</div>
				<div className="row">
					{/* The way of adding project into user's feed should be automatic 
				and be done in a different way(I think through class states) */}
					<div className="col s10 offset-s1 m10 offset-m1 container-fluid hoverable z-depth-1">
						<table className="bordered centered highlighted responsive-table">
							<thead className="table-head white-text">
								<tr>
									<th>Username</th>
									<th>Project Title</th>
									<th>Description</th>
									<th>Help Needed</th>
									<th />
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
