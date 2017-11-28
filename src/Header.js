import React, { Component } from "react";
import {
	//Redirect,
	//Router,
	//Route,
	//Link,
	NavLink
	//HashRouter,
	//BrowserRouter
} from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "./Header.css";
import $ from "jquery";
import "bootstrap-social";

//makes materialize-css work since it needs jquery and imports have to go at the top
window.jQuery = require("jquery");
require("materialize-css");

class Header extends Component {
	constructor(props) {
		super(props);
		$(document).ready(function() {
			$(".dropdown-button").dropdown({
				inDuration: 300,
				outDuration: 225,
				constrainWidth: true, // Does not change width of dropdown to that of the activator
				hover: true, // Activate on hover
				gutter: 0, // Spacing from edge
				belowOrigin: true, // Displays dropdown below the button
				alignment: "left", // Displays dropdown with edge aligned to the left of button
				stopPropagation: false // Stops event propagation
			});
			$(".collapsible").collapsible();
		});
	}

	componentDidUpdate() {
		$(".dropdown-button").dropdown({
			inDuration: 300,
			outDuration: 225,
			constrainWidth: true, // Does not change width of dropdown to that of the activator
			hover: true, // Activate on hover
			gutter: 0, // Spacing from edge
			belowOrigin: true, // Displays dropdown below the button
			alignment: "left", // Displays dropdown with edge aligned to the left of button
			stopPropagation: false // Stops event propagation
		});
		$(".collapsible").collapsible();
	}

	render() {
		return (
			<div className="Header">
				{/* navigation bar - more responsive*/}
				<nav className="z-depth-2">
					{this.props.authenticated ? (
						<div className="nav-wrapper grey darken-4">
							<NavLink to="/home" className="brand-logo center">
								<img alt="Brand" className="App-logo" src="../../favicon.ico" />
							</NavLink>
							<div className="padded hide-on-large-only">
								<a
									data-activates="slide-out"
									className="valign-wrapper menu button-collapse"
								>
									<i className="material-icons">menu</i>
								</a>
							</div>
							<ul id="slide-out" className="side-nav z-depth-3">
								<li>
									<NavLink to="/home">Home</NavLink>
								</li>
								<li className="no-padding">
									<ul className="collapsible" data-collapsible="accordian">
										<li>
											<a className="collapsible-header">
												Media<i className="material-icons">arrow_drop_down</i>
											</a>
											<div className="collapsible-body">
												<ul>
													<li>
														<NavLink to="/addproject">Add Project</NavLink>
													</li>
													<li>
														<NavLink to="/openproject">Open Projects</NavLink>
													</li>
													<li className="divider" />
													<li>
														<NavLink to="/viewprojects">View Projects</NavLink>
													</li>
												</ul>
											</div>
										</li>
									</ul>
								</li>
								<li className="divider" />
								<li>
									<NavLink to="/">Profile</NavLink>
								</li>
								<li>
									<NavLink to="/logout">Logout</NavLink>
								</li>
							</ul>

							<ul className="left hide-on-med-and-down">
								<li>
									<NavLink to="/home">Home</NavLink>
								</li>
								<li>
									<a className=" dropdown-button " data-activates="dropdown1 ">
										Projects<i className="material-icons right">
											arrow_drop_down
										</i>
									</a>
									{/* Dropdown Structure */}
									<ul id="dropdown1" className="dropdown-content">
										<li>
											<NavLink to="/viewprojects">View Projects</NavLink>
										</li>
										<li>
											<NavLink to="/openproject">Open Projects</NavLink>
										</li>
										<li className="divider" />
										<li>
											<NavLink to="/addproject">Add Project</NavLink>
										</li>
									</ul>
								</li>
							</ul>
							<ul className="right hide-on-med-and-down">
								<li>
									<NavLink to="/home">Profile</NavLink>
								</li>
								<li>
									<NavLink to="/logout">Logout</NavLink>
								</li>
							</ul>
						</div>
					) : (
						<div className="nav-wrapper grey darken-4">
							<NavLink to="/home" className="brand-logo">
								<img alt="Brand" className="App-logo" src="../../favicon.ico" />
							</NavLink>
						</div>
					)}
				</nav>
			</div>
		);
	}
}

export default Header;
