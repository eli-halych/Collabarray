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
import "./OpenProject.css";
import { position } from "tether";

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
		// this.handleChangeComment = this.handleChangeComment.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRemovePost = this.handleRemovePost.bind(this);
		this.handleSubmitComment = this.handleSubmitComment.bind(this);
		this.outputComments = this.outputComments.bind(this);
		this.checkIds = this.checkIds.bind(this);
	}

	componentWillMount() {



		this.firebaseRef = app.database().ref("/Projects").child(this.props.match.params.id).child("/Posts"); // <-- looks like it creates a new reference to a child called Posts(not there, so I assume it creates that)
		this.firebaseRef.limitToLast(10).on( /* <-- display N comments */
			"value",
			function (dataSnapshot) { /* <-- takes all children from Posts */
				// console.log(dataSnapshot.val());
				var Posts = [];

				dataSnapshot.forEach( /* <-- for loop */
					function (childSnapshot) { /* <-- takes Posts' children under each key(unique ID like -KzpkdrQEY_DfYAw5hr5) */
						// console.log(childSnapshot.val());
						var item = childSnapshot.val(); /* <-- takes data of each child under eaach key from Posts */
						item[".key"] = childSnapshot.key;  /* <-- gets each key */
						item.id = item[".key"];
						Posts.push(item);  /* <-- pushes into array variable Posts of this function */
					}.bind(this)
				);
				this.setState({
					Posts: Posts  /* <-- assigns var Posts to state Post */
				});
			}.bind(this)
		);

		this.firebaseRef = app.database().ref("/Projects").child(this.props.match.params.id).child("/Posts"); // <-- looks like it creates a new reference to a child called Posts(not there, so I assume it creates that)
		this.firebaseRef.limitToLast(15).on( /* <-- display N comments */
			"value",
			function (dataSnapshot) { /* <-- takes all children from Posts */
				// console.log(dataSnapshot.val());
				var Comments = []
				dataSnapshot.forEach( /* <-- for loop */
					function (childSnapshot) { /* <-- takes Posts' children under each key(unique ID like -KzpkdrQEY_DfYAw5hr5) */
						// console.log(childSnapshot.key);
						var postKey = childSnapshot.key;

						this.firebaseRef.child(childSnapshot.key).child("/Comments").limitToLast(3).on(
							"value",

							function (dataSnapshot) {
								var SecondaryComments = [];

								dataSnapshot.forEach(
									function (childSnapshot) {
										// console.log(childSnapshot.key);
										var item = childSnapshot.val(); /* <-- takes data of each child under eaach key from Posts */
										item[".key"] = childSnapshot.key;  /* <-- gets each key */
										item.id = item[".key"];
										SecondaryComments.push(item);  /* <-- pushes into array variable Posts of this function */
									}
								);
								Comments.push({ postKey, SecondaryComments });
								// console.log(SecondaryComments.forEach(function(e){console.log(e.id)}));
								this.setState({
									Comments: Comments  /* <-- assigns var Posts to state Post */
								});
							}.bind(this)

						)
					}.bind(this)
				);
				// console.log(Comments);
			}.bind(this)
		);



	}

	componentWillUnmount() {
		this.firebaseRef.off();
	}




	handleSubmit(e) {  /* <-- ON SUBMIT */
		e.preventDefault();

		const itemsRef = app.database().ref("/Projects").child(this.props.match.params.id).child("/Posts");  /* <-- gets the reference to Posts tree */
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
	// handleChangeComment(e) {
	// 	// console.log("changed");
	// 	// console.log(e.target.name); // e.target.name is taken from attribute name=""
	// 	this.setState({
	// 		[e.target.name]: e.target.value
	// 	});
	// }
	handleRemovePost(e) {
		// console.log(e);
		return app.database().ref("/Projects").child(this.props.match.params.id).child("/Posts").child(e).remove();
	}
	handleSubmitComment(e, id) {
		e.preventDefault();

		const itemsRef = app.database().ref("/Projects").child(this.props.match.params.id).child("/Posts").child(id).child("/Comments");  /* <-- gets the reference to Posts tree */
		var user = app.auth().currentUser;
		var email = user.email;
		for (var i = 0; i < 100; i++) {  /* <-- cuts @email.com off */
			if (email.charAt(i) == "@") {
				email = email.substring(0, i);
			}
		}
		const item = {  /* <-- new item */
			textComment: this.state.textComment,
			username: email
		};
		// console.log(item.textComment);
		itemsRef.push(item);  /* <-- the item is pushed to Firebase */
		this.setState({  /* <-- clear the input */
			textComment: ""
		});
	}
	outputComments(post) {
		// var tmp = [];

		// const Comments = this.state.Comments;
		// const comment = Comments.map(secComment => (


		// 	tmp.push(this.checkIds(postKey, secComment))

		// ))

		// return tmp;

		const Comments = this.state.Comments;
		const comment = Comments.map(secComment => (
		<div className="comment-section">
		<p key={secComment.SecondaryComments.id}>{secComment.SecondaryComments.username}</p>
		<p key={secComment.SecondaryComments.id}>{secComment.SecondaryComments.textComment}</p>
		-------- <br />
	</div>
		))
	}
	checkIds(post, secComment) {
		return ((post == secComment.postKey) ? (
			secComment.SecondaryComments.forEach(
				function (entry) {
					<div className="comment-section">
						<p key={entry.id}>{entry.username}</p>
						<p key={entry.id}>{entry.textComment}</p>
						-------- <br />
					</div>
					// console.log(post);
				}
			)
		)
			: (
				console.log()
			)
		)
	}

	render() {
		const Posts = this.state.Posts;


		const post = Posts.map(post => (  /* <-- a const containing html the way the comment should be displayed */

			<div className="card-panel">
				<div className="comment-section black-text text-darken-2">

					<hr />
					<p key={post.key}>{post.username}</p>
					<p key={post.key}>{post.text}</p>
					<button className="btn waves-effect waves-light">
						Like
				</button>
					<button className="btn waves-effect waves-light" >
						Comment
				</button>
					<button className="btn waves-effect waves-light">
						Share
				</button>
					<button className="btn waves-effect waves-light" onClick={() => this.handleRemovePost(post.id)}>
						Remove
				</button>

					<hr />


					<div>
						=====comments here=====
				{this.outputComments(post)}
						=======================

				<div className="container grey darken-4">
							<section className="add-item grey darken-4">
								<form onSubmit={(e) => this.handleSubmitComment(e, post.id)}>
									<input
										type="text"
										name="textComment"
										placeholder="Comment"
										onChange={this.handleChange}
										value={this.state.textComment}
									/>
									<br />
									<button className="btn waves-effect waves-light">
										Comment on it
							</button>
								</form>
							</section>
						</div>
					</div>


				</div>
			</div>
		)).reverse();


		return (
			<div className="OpenProject">
				<header>
					<div className="title">
						{/* it takes /:id which is set in REF. to App.js and specified in REF. to Home.js. The ID is projectTitle so far */}
						{/* {<h1>{app.database().ref("/Projects").child(this.props.match.params.id)}</h1> } */}
						<h6>Project id: {this.props.match.params.id}</h6>

					</div>
				</header>
				<div >
					<img className="img col m3" src="https://firebasestorage.googleapis.com/v0/b/collabarray-953db.appspot.com/o/dog.jpg?alt=media&token=9f4e2fa7-9d3c-47cb-a1fb-f7e6608edd4a" />
				</div>
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
