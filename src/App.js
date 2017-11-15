import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import { Spinner } from "@blueprintjs/core"; 
// import firebase from 'firebase';
import {
	BrowserRouter,
	//HashRouter,
	//Link,
	// NavLink,
	Redirect,
	//Router,
	Route,
	Switch
} from "react-router-dom";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import AddProject from "./AddProject";
import OpenProject from "./OpenProject";
import Logout from "./Logout";

import { app } from "./firebaseInitApp.js";

const Loading = { 
	textAlign: "center", 
	position: "absolute", 
	top: "25%", 
	left: "50%" };

class App extends Component {
	constructor() {
		super();
		this.state = {
			authenticated: false,
			loading: true
		};
	}

	componentWillMount() {
		this.removeAuthListener = app.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({
					authenticated: true,
					loading: false
				});
			} else {
				this.setState({
					authenticated: false,
					loading: false
				});
			}
		});
	}

	componentWillUnmount() {
		this.removeAuthListener();
	}

	render() {
		if (this.state.loading === true){
			return (
				<div style={Loading}>
					<h3>Loading...</h3>
					<Spinner />
				</div>
			)
		}

		return (
			<BrowserRouter>
				<div className="App">
					<Header authenticated={this.state.authenticated} />
					<div className="content">
						{/*where our content(views) will load into*/}
						<Switch>
							<Route
								exact
								path="/"
								render={() =>
									this.state.authenticated ? (
										<Redirect to="/main" />
									) : (
										<Redirect to="/signin" />
									)}
							/>
							<Route path="/main" component={Main} />
							<Route path="/signin" component={SignIn} />
							<Route path="/signup" component={SignUp} />
							<Route path="/logout" component={Logout} />
							<Route path="/addproject" component={AddProject} />
							<Route path="/openproject" component={OpenProject} />
						</Switch>
					</div>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
