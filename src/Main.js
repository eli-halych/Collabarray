import React, { Component } from "react";
import "./Main.css";
import {
	Redirect,
	//Router,
	Route,
	Link,
	NavLink,
	//HashRouter,
	BrowserRouter,
	Switch
} from "react-router-dom";

class Main extends Component {
	render() {
		return (
			<div className="Main">
				<div className="border col-md-3">
					Left panel with filters etc.
					<hr />
					{/*where our content(views) will load into*/}
					<NavLink className="btn btn-primary btn-lg" to="/addproject">
						Add project
					</NavLink>
					<hr />
				</div>

				{/* The method pf adding Project in the feed should be changed, 
				because when a project is created by a user and added to the database,
				it should appear automatically(I think we should use class states, but I'm not quite sure)  */}
				<div className="border col-md-9">Right block aka Newsfeed
				<hr />
				<NavLink className="btn btn-primary btn-lg" to="/project">
						Open Project
				</NavLink>
				<hr />
				<NavLink className="btn btn-primary btn-lg" to="/project">
						Open Project
				</NavLink>
				<hr />
				<NavLink className="btn btn-primary btn-lg" to="/project">
						Open Project
				</NavLink>
				<hr />
				<NavLink className="btn btn-primary btn-lg" to="/project">
						Open Project
				</NavLink>
				<hr />
				</div>
			</div>
		);
	}
}

export default Main;
