import React, { Component } from "react";
import "./Main.css";
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

import $ from "jquery";
import "bootstrap-social";

//makes materialize-css work since it needs jquery and imports have to go at the top
window.jQuery = require("jquery");
require("materialize-css");

class Main extends Component {
	render() {
		return (
			<div className="Main">
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
						<hr />
						Right block aka Newsfeed
						<hr />
						<NavLink className="btn btn-primary btn-lg" to="/openproject">
							Open project
						</NavLink>
						<hr />
						<NavLink className="btn btn-primary btn-lg" to="/openproject">
							Open project
						</NavLink>
						<hr />
						<NavLink className="btn btn-primary btn-lg" to="/openproject">
							Open project
						</NavLink>
						<hr />
					</div>
				</div>
			</div>
		);
	}
}

export default Main;
