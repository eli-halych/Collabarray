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

import {
	app
	//facebookProvider,
	//githubProvider,
	//googleProvider
} from "./firebaseInitApp.js";
import Logo from "./img/logo/Collabarray-Logo.png";

//makes materialize-css work since it needs jquery and imports have to go at the top
window.jQuery = require("jquery");
require("materialize-css");

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userId: "",
			userFullName: ""
		};
		$(document).ready(() => {
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
			$(".button-collapse").sideNav({
				menuWidth: 200, // Default is 300
				edge: "left", // Choose the horizontal origin
				closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
				draggable: true // Choose whether you can drag to open on touch screens,
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
		$(".button-collapse").sideNav({
			menuWidth: 200, // Default is 300
			edge: "left", // Choose the horizontal origin
			closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
			draggable: true // Choose whether you can drag to open on touch screens,
		});
		$(".collapsible").collapsible();
	}

	componentWillMount() {
		// console.log(this.props.authenticated);
		// var user = app.auth().currentUser;
		// var fullName = user.displayName;
		// var email = user.email;
		//
		// var user = app.auth().currentUser;
		// console.log(user)
		// var fullName = user.displayName
		// var email = user.email;
		// for (var i = 0; i < 100; i++) {  /* <-- cuts @email.com off */
		// 	if (email.charAt(i) === "@") {
		// 		email = email.substring(0, i);
		// 	}
		// }
		// this.state.userId = email
		// this.state.userFullName = fullName
		// console.log(this.state.userId)
	}

	componentWillUnmount() {
		this.state.userId = "";
		this.state.userFullName = "";
	}

	render() {
		return (
			<div className="Header">
				{/* navigation bar - more responsive*/}
				<nav className="z-depth-2">
					{this.props.authenticated ? (
						<div className="nav-wrapper grey darken-4">
							<NavLink to="/home" className="brand-logo center">
								<img alt="Brand" className="" src={Logo} />
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
								<a>
									<i className="material-icons">menu</i>
								</a>
								<li>
									<NavLink to="/home">
										Home<i className="material-icons left">home</i>
									</NavLink>
								</li>
								<li className="no-padding">
									<ul className="collapsible" data-collapsible="accordian">
										<li>
											<a className="collapsible-header">
												Project Options<i className="material-icons right">
													arrow_drop_down_circle
												</i>
											</a>
											<div className="collapsible-body">
												<ul>
													<li>
														<NavLink to="/viewprojects">View Projects</NavLink>
													</li>
													<li>
														<NavLink to="/addproject">Add Project</NavLink>
													</li>
												</ul>
											</div>
										</li>
									</ul>
								</li>
								<li className="divider" />
								<li>
									<NavLink to={"/profile/" + "userid"}>
										Profile
										<i className="material-icons left">account_circle</i>
									</NavLink>
								</li>
								<li>
									<NavLink to="/logout">
										Logout
										<i className="material-icons left">power_settings_new</i>
									</NavLink>
								</li>
							</ul>
							<ul className="left hide-on-med-and-down">
								<li>
									<NavLink to="/home">
										Home <i className="material-icons left">home</i>
									</NavLink>
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
											<NavLink to="/addproject">Add Project</NavLink>
										</li>
									</ul>
								</li>
							</ul>
							<ul className="right hide-on-med-and-down">
								<li>
									<NavLink to={"/profile/" + "userid"}>
										Profile
										<i className="material-icons left">account_circle</i>
									</NavLink>
								</li>
								<li>
									<NavLink to="/logout">
										Logout
										<i className="material-icons right">power_settings_new</i>
									</NavLink>
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
