import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./SignIn.css";
// import firebase from 'firebase';
import {
	app,
	// facebookProvider,
	// githubProvider,
	googleProvider
} from "./firebaseInitApp.js";
import { Toaster, Intent } from "@blueprintjs/core";
import {
	Redirect
	//Router,
	//Route,
	// Link,
	// NavLink
	//HashRouter,
	//BrowserRouter,
	//Switch
} from "react-router-dom";
// import $ from "jquery";
import "bootstrap-social";
// import { COLLAPSE } from "@blueprintjs/core/dist/common/classes";

//makes materialize-css work since it needs jquery and imports have to go at the top
window.jQuery = require("jquery");
require("materialize-css");

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.authWithFacebook = this.authWithFacebook.bind(this);
		this.authWithGithub = this.authWithGithub.bind(this);
		this.authWithGoogle = this.authWithGoogle.bind(this);
		this.authWithEmailAndPassword = this.authWithEmailAndPassword.bind(this);
		this.createUserInDatabase = this.createUserInDatabase.bind(this);
		this.state = {
			authenticated: false,
			redirect: false
		};
	}

	authWithFacebook() {
		// app
		// 	.auth()
		// 	.signInWithPopup(facebookProvider)
		// 	.then((result, error) => {
		// 		if (error) {
		// 			this.toaster.show({
		// 				intent: Intent.DANGER,
		// 				message: "Unable to sign in with Facebook"
		// 			});
		// 		} else {
		// 			console.log("Authorised with Facebook");
		// 			this.setState({ redirect: true });
		// 			this.setState({ authenticated: true });
		// 		}
		// 	});

		// NOT WORKING
	}
	authWithGithub() {
		// app
		// 	.auth()
		// 	.signInWithPopup(githubProvider)
		// 	.then((result, error) => {
		// 		if (error) {
		// 			this.toaster.show({
		// 				intent: Intent.DANGER,
		// 				message: "Unable to sign in with GitHub"
		// 			});
		// 		} else {
		// 			console.log("Authorised with GitHub");
		// 			this.setState({ redirect: true });
		// 			this.setState({ authenticated: true });
		// 		}
		// 	});

		//NOT WORKING
	}
	authWithGoogle() {
		app
			.auth()
			.signInWithPopup(googleProvider)
			.then((result, error) => {
				if (error) {
					this.toaster.show({
						intent: Intent.DANGER,
						message: "Unable to sign in with Google"
					});
				} else {
					console.log("Authorised with Google");
					this.setState({ redirect: true });
					this.setState({ authenticated: true });
					// this.createUserInDatabase(); // <--- adds users to the database, but should be linked to registration process only, not sign in
				}
			});
	}
	authWithEmailAndPassword(event) {
		event.preventDefault();
		const email = this.emailInput.value;
		const password = this.passswordInput.value;

		app
			.auth()
			.fetchProvidersForEmail(email)
			.then(providers => {
				if (providers.length === 0) {
					// create account
					// if does not have an account
					return app.auth().createUserWithEmailAndPassword(email, password).then( user => this.createUserInDatabase(user) );
				} else if (providers.indexOf("password") === -1) {
					// they used facebook, google, github etc. to sign in
					// did not sign up with email and password
					this.loginForm.reset();
					this.toaster.show({
						intent: Intent.WARNING,
						message: "Try an alternative login."
					});
				} else {
					// sign the user in
					return app.auth().signInWithEmailAndPassword(email, password);
				}
			})
			.then(user => {
				if (user && user.email) {
					this.loginForm.reset();
					this.setState({ redirect: true });
					this.setState({ authenticated: true });
				}
			})
			.catch(error => {
				this.toaster.show({ intent: Intent.DANGER, message: error.message });
			});
	}

	createUserInDatabase(user){
		// var user = app.auth().currentUser;
		var firebaseRef = app.database().ref("/Users");

		var email = user.email;
		var username = "";
		for (var i = 0; i < 100; i++) {
			/* <-- cuts @email.com off */
			if (email.charAt(i) === "@") {
				username = email.substring(0, i);
			}
		}

		const item = {
			username: username,
			email : user.email,
			fullName: user.displayName
		}

		firebaseRef.push(item);
		
		console.log("createUserInDatabase was successfully called")
		console.log(item.username)
		console.log(item.email)
		console.log(item.fullName)
	}

	render() {
		return this.state.authenticated ? (
			<Redirect to="/home" />
		) : (
			<div className="SignIn">
				<div className="header-back z-depth-1">
					<div className="page-header">
						<h1>{this.props.title}</h1>
					</div>
				</div>
				<div className="SignIn valign-wrapper">
					{/* <img src={logo} alt="Collabarray-Logo" /> */}

					<div className="login row hoverable z-depth-1">
						<Toaster
							ref={element => {
								this.toaster = element;
							}}
						/>

						<form
							onSubmit={event => {
								this.authWithEmailAndPassword(event);
							}}
							ref={form => {
								this.loginForm = form;
							}}
							id="js-form"
							className="col s12"
						>
							<div className="input-field col s12">
								<i className="material-icons prefix">mail_outline</i>
								<input
									type="email"
									id="txtEmail"
									className="form-control validate"
									required
									ref={input => {
										this.emailInput = input;
									}}
								/>
								<label
									htmlFor="email"
									data-error="Email is Invalid"
									data-success="Valid"
								>
									<b>Email:</b>
								</label>
							</div>
							<div className="input-field col s12">
								<i className="material-icons prefix">lock_outline</i>
								<input
									type="password"
									id="txtPassword"
									className="form-control validate"
									required
									ref={input => {
										this.passswordInput = input;
									}}
								/>{" "}
								<label
									htmlFor="password"
									data-error="Password is Required"
									data-success="Valid"
								>
									<b>Password:</b>
								</label>
							</div>
							<button
								type="submit"
								id="btnLogIn"
								className="btn waves-effect waves-light"
							>
								Log in
								<i className="material-icons right">send</i>
							</button>
							{/* <NavLink to="/signup" id="btnSignUp" className="btn btn-primary">Sign Up</NavLink> */}{" "}
							{/* <--- Sign up page will be completed a bit later */}
							{/* <button type="submit" id="btnSignUp" className="btn btn-secondary">Sign Up</button> */}
						</form>

						<div className="">
							<button
								type="submit"
								id="btnSignInGithub"
								className="waves-effect waves-light btn btn-social btn-github"
								onClick={() => {
									this.authWithGithub();
								}}
							>
								<span className="fa fa-github" />
								Sign in with Github
								<i className="material-icons right">send</i>
							</button>

							<br />
							<button
								type="submit"
								id="btnSignInGoogle"
								className="waves-effect waves-light btn btn-social btn-google"
								onClick={() => {
									this.authWithGoogle();
								}}
							>
								<span className="fa fa-google" />
								Sign in with Google
								<i className="material-icons right">send</i>
							</button>
							<br />
							<button
								type="submit"
								id="btnSignInFacebook"
								className="waves-effect waves-light btn btn-social btn-facebook"
								onClick={() => {
									this.authWithFacebook();
								}}
							>
								<span className="fa fa-facebook" />
								Sign in with Facebook
								<i className="material-icons right">send</i>
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SignIn;
