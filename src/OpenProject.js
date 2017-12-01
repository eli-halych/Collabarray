import React, { Component } from "react";

import // Redirect,
//Router,
// Route,
//Link,
// NavLink
//HashRouter,
//BrowserRouter
// Switch
"react-router-dom";
import {
	app
	//facebookProvider,
	//githubProvider,
	//googleProvider
} from "./firebaseInitApp.js";
import "materialize-css/dist/css/materialize.min.css";
import "../node_modules/bootstrap-social/bootstrap-social.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./OpenProject.css";
import $ from "jquery";
import "bootstrap-social";

//makes materialize-css work since it needs jquery and imports have to go at the top
window.jQuery = require("jquery");
require("materialize-css");

class OpenProject extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Posts: [],
			text: "",
			username: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillMount() {
		this.firebaseRef = app.database().ref("/Posts"); // <-- looks like it creates a new reference to a child called Posts(not there, so I assume it creates that)
		this.firebaseRef.limitToLast(10).on(
			/* <-- display N texts */
			"value",
			function(dataSnapshot) {
				/* <-- takes all children from Posts */
				// console.log(dataSnapshot.val());
				var Posts = [];

				dataSnapshot.forEach(
					/* <-- for loop */
					function(childSnapshot) {
						/* <-- takes Posts' children under each key(unique ID like -KzpkdrQEY_DfYAw5hr5) */
						// console.log(childSnapshot.val());
						var item = childSnapshot.val(); /* <-- takes data of each child under eaach key from Posts */
						item[".key"] = childSnapshot.key; /* <-- gets each key */
						Posts.push(
							item
						); /* <-- pushes into array variable Posts of this function */
					}
				);
				this.setState({
					Posts: Posts /* <-- assigns var Posts to state Post */
				});
			}.bind(this)
		);
	}

	componentWillUnmount() {
		this.firebaseRef.off();
	}

	handleSubmit(e) {
		/* <-- ON SUBMIT */
		e.preventDefault();

		const itemsRef = app
			.database()
			.ref("Posts"); /* <-- gets the reference to Posts tree */
		var user = app.auth().currentUser;
		var email = user.email;
		for (var i = 0; i < 100; i++) {
			/* <-- cuts @email.com off */
			if (email.charAt(i) === "@") {
				email = email.substring(0, i);
			}
		}
		const item = {
			/* <-- new item */
			text: this.state.text,
			username: email
		};
		itemsRef.push(item); /* <-- the item is pushed to Firebase */
		this.setState({
			/* <-- clear the input */
			text: ""
		});
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	render() {
		const Posts = this.state.Posts;

		const post = Posts.map((
			Posts /* <-- a const containing html the way the text should be displayed */
		) => (
			<tr>
				<td key={Posts.key}>{Posts.username}</td>
				<td key={Posts.key}>{Posts.text}</td>
			</tr>
		)).reverse();

		return (
			<div className="OpenProject">
				<div className="header-back z-depth-1">
					<div className="page-header">
						{/* it takes /:id which is set in REF. to App.js and specified in REF. to Home.js. The ID is projectTitle so far */}
						{/* {<h1>{app.database().ref("/Projects").child(this.props.match.params.id)}</h1> } */}
						<h1>
							{this.props.title} [{post.title}]
						</h1>
					</div>
				</div>
				<div className="container row hoverable z-depth-1">
					<div className="col s12">
						<table className="bordered centered highlighted responsive-table">
							<thead>
								<tr>
									<th>Username</th>
									<th>Comment</th>
								</tr>
							</thead>
							<tbody>{post}</tbody>
						</table>
					</div>
					<form onSubmit={this.handleSubmit} id="js-form" className="col s12">
						<div className="input-field col s12">
							<i className="material-icons prefix">comment</i>
							<input
								type="text"
								id="text"
								name="text"
								onChange={this.handleChange}
								// value={this.state.text}
								required
							/>
							<label htmlFor="text">Comment:</label>
						</div>
						<button className="btn-large waves-effect waves-light">
							Post
							<i class="material-icons right">chat</i>
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default OpenProject;
