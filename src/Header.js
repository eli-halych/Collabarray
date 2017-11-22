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
import $ from "jquery";
import "bootstrap-social";

//makes bootstrap.js work since it needs jquery and imports have to go at the top
window.jQuery = require("jquery");
require("bootstrap");

class Header extends Component {
	render() {
		return (
			<div className="Header">
				{/* navigation bar - more responsive*/}
				<nav className="navbar navbar-default navbar-inverse">
					{this.props.authenticated ? (
						<div className="container-fluid">
							{/* Brand and toggle get grouped for better mobile display */}
							<div className="navbar-header">
								<button
									type="button"
									className="navbar-toggle collapsed"
									data-toggle="collapse"
									data-target="#bs-example-navbar-collapse-1"
									aria-expanded="false"
								>
									<span className="sr-only" style={{ color: "white" }}>
										Toggle navigation
									</span>
									<span className="icon-bar" style={{ color: "white" }} />
									<span className="icon-bar" style={{ color: "white" }} />
									<span className="icon-bar" style={{ color: "white" }} />
								</button>
								<NavLink to="/" className="navbar-brand">
									<img
										alt="Brand"
										className="App-logo"
										src="../../favicon.ico"
									/>
								</NavLink>
							</div>
							{/* Collect the nav links, forms, and other content for toggling */}
							<div
								className="collapse navbar-collapse"
								id="bs-example-navbar-collapse-1"
							>
								<ul className="nav navbar-nav nav-tabs">
									<li>
										<NavLink to="/main">Home</NavLink>
									</li>
									{/* dropdown menu */}
									<li className="dropdown">
										<NavLink
											to=""
											className="dropdown-toggle"
											data-toggle="dropdown"
											role="button"
											aria-haspopup="true"
											aria-expanded="false"
										>
											Projects <span className="caret" />
										</NavLink>
										<ul className="dropdown-menu">
											<li>
												<NavLink to="/addproject">Add Project</NavLink>
											</li>
											<li>
												<NavLink to="/openproject">Open Project</NavLink>
											</li>
											<li role="separator" className="divider" />
											<li>
												<NavLink to="/viewprojects">View Projects</NavLink>
											</li>
										</ul>
									</li>
									<li>
										<NavLink to="/">About Me</NavLink>
									</li>
								</ul>
								<ul className="nav navbar-nav navbar-right nav-tabs">
									<li>
										<NavLink to="/logout">Logout</NavLink>
									</li>
								</ul>
							</div>
							{/* /.navbar-collapse */}
						</div>
					) : (
						<div className="container-fluid">
							<div className="navbar-header">
								<NavLink to="/" className="navbar-brand">
									<img
										alt="Brand"
										className="App-logo"
										src="../../favicon.ico"
									/>
								</NavLink>
							</div>
						</div>
					)}
				</nav>
			</div>
		);
	}
}

export default Header;
