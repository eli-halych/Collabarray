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
		this.firebaseRef.limitToLast(10).on( /* <-- display N comments */
			"value",
			function(dataSnapshot) { /* <-- takes all children from Posts */
				// console.log(dataSnapshot.val());
				var Posts = [];

				dataSnapshot.forEach( /* <-- for loop */
					function(childSnapshot) { /* <-- takes Posts' children under each key(unique ID like -KzpkdrQEY_DfYAw5hr5) */
						// console.log(childSnapshot.val());
						var item = childSnapshot.val(); /* <-- takes data of each child under eaach key from Posts */
						item[".key"] = childSnapshot.key;  /* <-- gets each key */
						Posts.push(item);  /* <-- pushes into array variable Posts of this function */
					}.bind(this)
				);
				this.setState({
					Posts: Posts  /* <-- assigns var Posts to state Post */
				});
			}.bind(this)
		);		
	}

	componentWillUnmount() {
		this.firebaseRef.off();
	}




	handleSubmit(e) {  /* <-- ON SUBMIT */
		e.preventDefault();

		const itemsRef = app.database().ref("Posts");  /* <-- gets the reference to Posts tree */
		var user = app.auth().currentUser;
		var email = user.email;
		for (var i = 0; i < 100; i++) {  /* <-- cuts @email.com off */
			if (email.charAt(i) == "@") {
				email = email.substring(0, i);
			}
		}
		const item = {  /* <-- new item */
			text: this.state.text,
			username: email
		};
		itemsRef.push(item);  /* <-- the item is pushed to Firebase */
		this.setState({  /* <-- clear the input */
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

		const post = Posts.map(Posts => (  /* <-- a const containing html the way the comment should be displayed */
			<div>
				<hr />
				<p key={Posts.key}>{Posts.username}</p>
				<p key={Posts.key}>{Posts.text}</p>
				<hr />
			</div>
		));

		return (
			<div className="OpenProject">
				<header>
					<div className="title">
						{/* it takes /:id which is set in REF. to App.js and specified in REF. to Home.js. The ID is projectTitle so far */}
						{/* {<h1>{app.database().ref("/Projects").child(this.props.match.params.id)}</h1> } */}
						<h6>Project id: {this.props.match.params.id}</h6> 
						
					</div>
				</header>
				<hr />
				<div className="container grey darken-4">
					<section className="add-item grey darken-4">
						<form onSubmit={this.handleSubmit}>
							<input
								type="text"
								name="text"
								placeholder="Comment"
								onChange={this.handleChange}
								value={this.state.text}
							/>
							<br />
							<button className="btn waves-effect waves-light">
								Post
							</button>
						</form>
					</section>
				</div>
				<hr />
				{post} { /* <-- */}
			</div>
		);
	}
}

export default OpenProject;
