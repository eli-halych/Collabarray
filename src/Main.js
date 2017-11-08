import React, { Component } from "react";
import "./Main.css";
import {
	Redirect,
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

	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			addPressed: false
		};
	}

	handleClick() {
		this.state.addPressed = true;
	}

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
							<Link className="btn btn-primary btn-lg" to="/addproject" role="button">Add project</Link>
							{/* <Link className="btn btn-primary btn-lg" to="/addproject" >Add project</Link> */}
							{/* <Route exact path="/main" render={() => (
								this.state.authenticated ? (
									<Redirect to="/addproject" />
								) : (
									null
								)
							)} /> */}
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
