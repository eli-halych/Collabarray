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

import "./Header.css";
import "bootstrap-social";

class Header extends Component {
	render() {
		return (
			<div className="Header">
				<nav className="navbar navbar-inverse navbar-default">
					{this.props.authenticated ? (
						<div className="container-fluid col-sm-12 col-md-12">
							<ul className="nav navbar-nav navbar-left">
								<li className="active">
									<NavLink to="/signin">Home</NavLink>
								</li>
								<li>
									<NavLink to="/addproject">Add Project</NavLink>
								</li>
								<li>
									<NavLink to="/viewprojects">View Projects</NavLink>
								</li>
								<li>
									<NavLink to="/">Page 3</NavLink>
								</li>
							</ul>
							<ul className="nav navbar-nav navbar-right">
								<li className="active">
									<NavLink to="/">Profile</NavLink>
								</li>
								<li>
									<NavLink to="/logout">Log out</NavLink>
								</li>
							</ul>
						</div>
					) : (
						<div className="container-fluid col-sm-12 col-md-12">
							<div className="navbar-header">
								<a className="navbar-brand">Collabarray</a>
							</div>
						</div>
					)}
				</nav>
			</div>
		);
	}
}

export default Header;
