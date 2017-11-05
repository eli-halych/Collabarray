import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
// import firebase from 'firebase';
import {
	BrowserRouter,
	//HashRouter,
	//Link,
	NavLink,
	Redirect,
	//Router,
	//Route,
	Switch
} from "react-router-dom";

import SignIn from "./SignIn";
import Header from "./Header";
import Footer from "./Footer";

import { app } from "./firebaseInitApp.js";

class App extends Component {
	constructor() {
		super();
		this.state = {
			authenticated: false
		};
	}

	componentWillMount() {
		this.removeAuthListener = app.auth().onAuthStateChanged(user => {
			if (user) {
				this.setState({
					authenticated: true
				});
			} else {
				this.setState({
					authenticated: false
				});
			}
		});
	}

	componentWillUnmount() {
		this.removeAuthListener();
	}

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Header authenticated={this.state.authenticated} />
					<div className="content">
						{/*where our content(views) will load into*/}
						<Switch>
							<Route exact path="/" component={SignIn} />
							<Redirect path="*" to="/" />
						</Switch>
					</div>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
