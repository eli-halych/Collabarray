import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
import ViewProjects from "./viewProjects";
import Logout from "./Logout";
import Background from "./img/bg/bgSignIn.png";

import { app } from "./firebaseInitApp.js";

//makes bootstrap.js work since it needs jquery and imports have to go at the top
window.jQuery = require("jquery");
require("bootstrap");

const Loading = {
	textAlign: "center",
	position: "absolute",
	top: "25%",
	left: "50%"
};

class App extends Component {
	constructor() {
		super();
		this.state = {
			authenticated: false,
			loading: true
		};
	}

	componentWillMount() {
		this.removeAuthListener = app.auth().onAuthStateChanged(user => {
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
		if (this.state.loading === true) {
			return (
				<div style={Loading}>
					<h3>Loading...</h3>
					<Spinner />
				</div>
			);
		}
		// changes the background of signin to Background
		if (window.location.pathname === "/signin") {
			document.body.style.backgroundImage = "url(" + Background + ")";
			document.body.style.backgroundSize = "cover";
		}

		return (
			<BrowserRouter>
				<div className="App">
					<Header authenticated={this.state.authenticated} />
					<div className="content container-fluid">
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
									)
								}
							/>
							<Route path="/main" component={Main} />
							<Route path="/signin" component={SignIn} />
							<Route path="/signup" component={SignUp} />
							<Route path="/logout" component={Logout} />
							<Route path="/addproject" component={AddProject} />
							<Route path="/openproject" component={OpenProject} />
							<Route path="/viewprojects" component={ViewProjects} />
						</Switch>
					</div>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
