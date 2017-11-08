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

				<div className="border col-md-9">Right block aka Newsfeed</div>
			</div>
		);
	}
}

export default Main;
