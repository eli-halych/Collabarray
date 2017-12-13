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
// import $ from "jquery";
import "bootstrap-social";
import "./OpenProject.css";
// import { database } from "firebase";
// import { position } from "tether";

//makes materialize-css work since it needs jquery and imports have to go at the top
window.jQuery = require("jquery");
require("materialize-css");

class OpenProject extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ID: "",
			Posts: [],
			text: "",
			username: "",

			Comments: [],
			textComment: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRemovePost = this.handleRemovePost.bind(this);
		this.handleSubmitComment = this.handleSubmitComment.bind(this);

		this.subscribe = this.subscribe.bind(this);

		this.getPosts = this.getPosts.bind(this);
		this.showComments = this.showComments.bind(this);

		this.addToTeam = this.addToTeam.bind(this);
	}

	componentWillMount() {
		this.getPosts();
	}

	componentWillUnmount() {
		this.firebaseRef.off();
	}

	getPosts() {
		this.firebaseRef = app
			.database()
			.ref("/Projects")
			.child(this.props.match.params.id)
			.child("/Posts"); // <-- looks like it creates a new reference to a child called Posts(not there, so I assume it creates that)
		this.firebaseRef.limitToLast(10).on(
			/* <-- display N comments */
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
						var item = childSnapshot.val(); /* <-- takes data of each child under each key from Posts */ // items already contain comments
						item[".key"] = childSnapshot.key; /* <-- gets each key */
						item.id = childSnapshot.key;
						Posts.push(
							item
						); /* <-- pushes variable Posts into array of this funct  */
					}
				);

				this.setState({
					Posts: Posts /* <-- assigns var Posts to state Post */
				});
			}.bind(this)
		);
	}
	showComments(post) {
		// console.log(post.Comments) //{comment{..}, comment{..}}

		const postRef = app
			.database()
			.ref("/Projects")
			.child(this.props.match.params.id)
			.child("/Posts")
			.child(post[".key"]);
		const commentsRef = postRef.child("/Comments");
		// console.log(commentsRef);

		var comments = [];

		commentsRef.limitToLast(3).on("value", function(dataSnapshot) {
			dataSnapshot.forEach(function(childSnapshot) {
				// console.log(childSnapshot.val());
				var commentKey = childSnapshot.key;
				comments.push(
					<div className="comment-section z-depth-1">
						<p className="reply white-text" key={commentKey}>
							{childSnapshot.val().username}
						</p>
						<p className="" key={commentKey}>
							{childSnapshot.val().textComment}
						</p>
					</div>
				);
			});
		});
		return comments;
	}

	handleSubmit(e) {
		/* <-- ON SUBMIT */
		e.preventDefault();

		const itemsRef = app
			.database()
			.ref("/Projects")
			.child(this.props.match.params.id)
			.child("/Posts"); /* <-- gets the reference to Posts tree */

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
	handleRemovePost(e) {
		// console.log(e);
		return app
			.database()
			.ref("/Projects")
			.child(this.props.match.params.id)
			.child("/Posts")
			.child(e)
			.remove();
	}
	handleSubmitComment(e, id) {
		e.preventDefault();

		const itemsRef = app
			.database()
			.ref("/Projects")
			.child(this.props.match.params.id)
			.child("/Posts")
			.child(id)
			.child("/Comments"); /* <-- gets the reference to Posts tree */
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
			textComment: this.state.textComment,
			username: email
		};
		// console.log(item.textComment);
		itemsRef.push(item); /* <-- the item is pushed to Firebase */
		this.setState({
			/* <-- clear the input */
			textComment: ""
		});
	}

	subscribe(e) {
		var user = app.auth().currentUser;
		console.log(user.uid);
	}

	addToTeam(username) {
		var projectRef = app
			.database()
			.ref("/Projects")
			.child(this.props.match.params.id);

		// var projTitle = JSON.stringify(projectRef.val().projectTitle);

		var projTitle = "";

		const itemsRef = projectRef.child("Team");

		//Finding Project Name:
		projectRef.on("value", function(dataSnapshot) {
			dataSnapshot.forEach(function(childSnapshot) {
				var temp = dataSnapshot.val().projectTitle;

				if (temp) {
					projTitle = temp;
				}
			});
		});
		// Finding User Name:
		const userRef = app.database().ref("/Users");

		userRef.on("value", function(dataSnapshot) {
			dataSnapshot.forEach(function(childSnapshot) {
				var item = JSON.stringify(childSnapshot.val());
				var len = username.length;
				var key = childSnapshot.key;

				for (var i = 0; i < 100; i++) {
					var temp = item.substring(i, i + len);
					if (username === temp) {
						const item = {
							/* <-- new member being added */
							Teams: projTitle
						};

						userRef
							.child(key)
							.child("/Teams")
							.update(item); /* <-- the item is pushed to Firebase */
						break;
					}
				}
			});
		});

		var check = false;

		itemsRef.on("value", function(dataSnapshot) {
			dataSnapshot.forEach(function(childSnapshot) {
				var item = JSON.stringify(childSnapshot.val());
				var len = username.length;
				check = false;
				for (var i = 0; i < 100; i++) {
					var temp = item.substring(i, i + len);
					console.log(temp);
					if (username === temp) {
						check = true;
						break;
					}
				}
			});
		});

		if (check === false) {
			const item = {
				/* <-- new member being added */
				member: username
			};
			// console.log(item.textComment);

			itemsRef.push(item); /* <-- the item is pushed to Firebase */
		} else {
			alert("This team member has already been added");
		}
	}

	render() {
		const Posts = this.state.Posts;

		const post = Posts.map((
			post /* <-- a const containing html the way the comment should be displayed */
		) => (
			<tr>
				<td className="User-bg white-text z-depth-1" key={post.key}>
					{post.username}
					<br />
					<button
						className="btn waves-effect waves-light"
						onClick={() => this.addToTeam(post.username)}
					>
						Add To Team
					</button>
				</td>
				<td className="z-depth-1" key={post.key}>
					{post.text} <br />
					<button className="btn waves-effect waves-light">
						Like
						<i className="material-icons">thumb_up</i>
					</button>
					{/* <button className="btn waves-effect waves-light">
					Comment
						<i className="material-icons">comment</i>
				</button> */}
					<button className="btn waves-effect waves-light">
						Share
						<i className="material-icons">share</i>
					</button>
					<button
						className="btn waves-effect waves-light"
						onClick={() => this.handleRemovePost(post.id)}
					>
						Remove
						<i className="material-icons">remove_circle_outline</i>
					</button>
				</td>

				<div id="comment-section">
					{/* =====comments here===== */}
					{this.showComments(post)} <br />
					{/* ======================= */}
				</div>

				<div className="container grey darken-4">
					<form onSubmit={e => this.handleSubmitComment(e, post.id)}>
						<div className="input-field col s12">
							<i className="material-icons prefix">comment</i>
							<input
								type="text"
								name="textComment"
								onChange={this.handleChange}
								required
							/>
							<label htmlFor="text">Reply:</label>
						</div>
						<button className="btn waves-effect waves-light">Reply</button>
					</form>
				</div>
			</tr>
		)).reverse();

		return (
			<div className="OpenProject">
				{/* <img className="img col m3" src="https://firebasestorage.googleapis.com/v0/b/collabarray-953db.appspot.com/o/dog.jpg?alt=media&token=9f4e2fa7-9d3c-47cb-a1fb-f7e6608edd4a" /> */}
				<div className="header-back z-depth-1">
					<div className="page-header">
						<h1>
							{this.props.title} [{post.title}]
						</h1>
					</div>
					<div className="subscribe-row">
						<button
							className="btn-large waves-effect waves-light"
							onClick={() => this.subscribe()}
						>
							Subscribe
						</button>
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
					{/* <div>
						<img
							className="img col m3"
							src="https://firebasestorage.googleapis.com/v0/b/collabarray-953db.appspot.com/o/dog.jpg?alt=media&token=9f4e2fa7-9d3c-47cb-a1fb-f7e6608edd4a"
						/>
					</div> */}
					<form onSubmit={this.handleSubmit} id="js-form" className="col s12">
						<div className="input-field col s12">
							<i className="material-icons prefix">comment</i>
							<input
								type="text"
								id="text"
								name="text"
								onChange={this.handleChange}
								value={this.state.text}
								required
							/>
							<label htmlFor="text">Comment:</label>
						</div>
						<button className="btn-large waves-effect waves-light">
							Post
							<i className="material-icons right">chat</i>
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default OpenProject;
