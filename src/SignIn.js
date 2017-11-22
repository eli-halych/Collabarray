import React, { Component } from "react";
import "./SignIn.css";
import "bootstrap-social/bootstrap-social.css";
import "font-awesome/css/font-awesome.min.css";
// import firebase from 'firebase';
import {
	app,
	facebookProvider,
	githubProvider,
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

//makes bootstrap.js work since it needs jquery and imports have to go at the top
window.jQuery = require("jquery");
require("bootstrap");

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.authWithFacebook = this.authWithFacebook.bind(this);
		this.authWithGithub = this.authWithGithub.bind(this);
		this.authWithGoogle = this.authWithGoogle.bind(this);
		this.authWithEmailAndPassword = this.authWithEmailAndPassword.bind(this);
		this.state = {
			redirect: false
		};
	}

	authWithFacebook() {
		app
			.auth()
			.signInWithPopup(facebookProvider)
			.then((result, error) => {
				if (error) {
					this.toaster.show({
						intent: Intent.DANGER,
						message: "Unable to sign in with Facebook"
					});
				} else {
					console.log("Authorised with Facebook");
					this.setState({ authenticated: true });
					this.setState({ redirect: true });
				}
			});
	}
	authWithGithub() {
		app
			.auth()
			.signInWithPopup(githubProvider)
			.then((result, error) => {
				if (error) {
					this.toaster.show({
						intent: Intent.DANGER,
						message: "Unable to sign in with GitHub"
					});
				} else {
					console.log("Authorised with GitHub");
					this.setState({ authenticated: true });
					this.setState({ redirect: true });
				}
			});
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
					this.setState({ authenticated: true });
					this.setState({ redirect: true });
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
					return app.auth().createUserWithEmailAndPassword(email, password);
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
					this.setState({ authenticated: true });
					this.setState({ redirect: true });
				}
			})
			.catch(error => {
				this.toaster.show({ intent: Intent.DANGER, message: error.message });
			});
	}

	render() {
		if (this.state.redirect === true) {
			return <Redirect to="/" />;
		}

		return (
			<div className="SignIn">
				{/* <img src={logo} alt="Collabarray-Logo" /> */}

				<br />

				<div className="login">
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
					>
						<label htmlFor="email">
							<b>Email:</b>
						</label>
						<input
							type="email"
							id="txtEmail"
							className="form-control"
							required
							ref={input => {
								this.emailInput = input;
							}}
							placeholder="Email"
						/>

						<br />

						<label htmlFor="password">
							<b>Password:</b>
						</label>
						<input
							type="password"
							id="txtPassword"
							className="form-control"
							required
							ref={input => {
								this.passswordInput = input;
							}}
							placeholder="Password"
						/>

						<div className="clearfix">
							<button type="submit" id="btnLogIn" className="btn btn-primary">
								Log in
							</button>
							{/* <NavLink to="/signup" id="btnSignUp" className="btn btn-primary">Sign Up</NavLink> */}{" "}
							{/* <--- Sign up page ill be completed a bit later */}
							{/* <button type="submit" id="btnSignUp" className="btn btn-secondary">Sign Up</button> */}
						</div>
					</form>

					<div className="clearfix">
						<a
							type="submit"
							id="btnSignInGithub"
							className="btn btn-block btn-social btn-github"
							onClick={() => {
								this.authWithGithub();
							}}
						>
							<span className="fa fa-github" />
							Sign in with Github
						</a>

						<br />
						<a
							type="submit"
							id="btnSignInGoogle"
							className="btn btn-block btn-social btn-google"
							onClick={() => {
								this.authWithGoogle();
							}}
						>
							<span className="fa fa-google" />
							Sign in with Google
						</a>
						<br />
						<a
							type="submit"
							id="btnSignInFacebook"
							className="btn btn-block btn-social btn-facebook"
							onClick={() => {
								this.authWithFacebook();
							}}
						>
							<span className="fa fa-facebook" />
							Sign in with Facebook
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default SignIn;
