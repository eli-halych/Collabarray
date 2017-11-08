import React, { Component } from "react";
import "./Main.css";
import {
	// Redirect,
	//Router,
	Route,
	Link,
	// NavLink
	//HashRouter,
	BrowserRouter,
	Switch
} from "react-router-dom";

import AddProject from "./AddProject";



class Main extends Component {
	render() {
		return (
			<BrowserRouter>
			<div className="Main">
				
				<div className="border col-md-3">
					Left panel with filters etc.
					<hr />
					
				
					
					
						{/*where our content(views) will load into*/}
						<Switch>
							<Route exact path="/addproject" component={AddProject} />
							{/* <a className="btn btn-primary btn-lg" onClick="" role="button">Add project</a> */}
							<Link className="btn btn-primary btn-lg" to="/addproject" >Add project</Link>
						</Switch>
					
				
			
			


					<hr />
				</div>

				<div className="border col-md-9">
					Right block aka Newsfeed
				</div>

      </div>
			</BrowserRouter>
		);
	}
}

export default Main;
