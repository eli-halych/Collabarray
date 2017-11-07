import React, { Component } from "react";
import "./SignIn.css";
import "../node_modules/bootstrap-social/bootstrap-social.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
// import firebase from 'firebase';
import {
	app,
	facebookProvider,
	githubProvider,
	googleProvider
} from "./firebaseInitApp.js";
import { Toaster, Intent } from "@blueprintjs/core";
import "react-router-dom";
import Background from "./img/bg/bgSignIn.png";

const pageStyle = {
	backgroundImage: `url(${Background})`,
	height: "100%"
};

const loginStyles = {
	background: "white",
	width: "90%",
	maxWidth: "415px",
	margin: "20px auto",
	border: "1px solid #ddd",
	borderRadius: "5px",
	padding: "10px"
};

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
					this.setState({ redirect: true });
				}
			});
	}
	authWithEmailAndPassword(event) {
		event.preventDefault();
		console.log("authed with Email");
		console.table([
			{
				email: this.emailInput.value,
				password: this.passswordInput.value
			}
		]);
	}

	render() {
		if (this.state.redirect === true) {
			//return ();
		}

		return (
			<div className="SignIn" style={pageStyle}>
				{/* <img src={logo} alt="Collabarray-Logo" /> */}

				<br />

				<div style={loginStyles}>
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
							{/* <button type="submit" id="btnLogOut" className="btn btn-light hide">Log Out</button> */}
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
