import React, { Component } from "react";
import "./Main.css";
import {
	// Redirect,
	//Router,
	// Route,
	// Link,
	NavLink,
	//HashRouter,
	// BrowserRouter,
	// Switch
} from "react-router-dom";

class Main extends Component {
	render() {
		return (
			<div className="Main">
				<div className="border col-md-3">
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
				<div className="border col-md-9">
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
		);
	}
}

export default Main;
