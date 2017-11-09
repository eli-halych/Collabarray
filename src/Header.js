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
						<div className="container-fluid col-sm-6 col-md-6">
							<ul className="nav navbar-nav navbar-left">
								<li className="active">
									<NavLink to="/">Home</NavLink>
								</li>
								<li>
									<NavLink to="/">Page 1</NavLink>
								</li>
								<li>
									<NavLink to="/">Page 2</NavLink>
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
									<NavLink to="/">Log out</NavLink>
								</li>
							</ul>
						</div>
					) : (
						<div className="container-fluid col-sm-6 col-md-6">
							<div className="navbar-header">
								<a className="navbar-brand">Collabarray</a>
							</div>
							<ul className="nav navbar-nav">
								<li className="active">
									<NavLink to="/">Profile</NavLink>
								</li>
								<li>
									<NavLink to="/">Page 1</NavLink>
								</li>
								<li>
									<NavLink to="/">Page 2</NavLink>
								</li>
								<li>
									<NavLink to="/">Page 3</NavLink>
								</li>
							</ul>
						</div>
					)}
				</nav>
			</div>
		);
	}
}

export default Header;
