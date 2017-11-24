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
import "materialize-css/dist/css/materialize.min.css";
import "../node_modules/bootstrap-social/bootstrap-social.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./OpenProject.css";
import $ from "jquery";
import "bootstrap-social";

//makes materialize-css work since it needs jquery and imports have to go at the top
window.jQuery = require("jquery");
require("materialize-css");

const progressBar = {
	width: "25%"
};

class OpenProject extends Component {
	render() {
		return (
			<div className="OpenProject">
				<header>
					<div className="title">
						<h1>Project View</h1>
					</div>
				</header>
				<div className=" col-md-offset-1 col-md-7">
					<hr />
					<div className="progress">
						<div
							className="progress-bar progress-bar-success progress-bar-striped activate"
							role="progressbar"
							style={progressBar}
							aria-valuenow="25"
							aria-valuemin="0"
							aria-valuemax="100"
						/>
					</div>

					<hr />

					{/* Posts are in 'media' class*/}
					<div className="media">
						<div className="media-left">
							<a href="">
								{/* Post image */}
								<img
									src={require("./img/test/post.png")}
									alt="Post"
									height="100px"
									width="100px"
								/>
							</a>
						</div>
						<div className="media-body">
							<h4 className="media-heading">Post #</h4>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
							interdum posuere nunc id vestibulum. Sed in nibh finibus, eleifend
							est vel, consequat massa. Ut nec metus pulvinar, faucibus felis
							laoreet, fermentum erat.
						</div>
						{/* Post's buttons Share and Comment */}
						<div className="col-md-1">
							<a href="" className="btn btn-default">
								<span className="glyphicon glyphicon-circle-arrow-right" />{" "}
								Share
							</a>
						</div>
						<div className="col-md-2">
							<a href="" className="btn btn-default">
								<span className="glyphicon glyphicon-align-justify" /> Comment
							</a>
						</div>

						<hr />

						<div className="media-left">
							<a href="">
								{/* Post image */}
								<img
									src={require("./img/test/post.png")}
									alt="Post"
									height="100px"
									width="100px"
								/>
							</a>
						</div>
						<div className="media-body">
							<h4 className="media-heading">Post #</h4>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
							interdum posuere nunc id vestibulum. Sed in nibh finibus, eleifend
							est vel, consequat massa. Ut nec metus pulvinar, faucibus felis
							laoreet, fermentum erat.
						</div>
						{/* Post's buttons Share and Comment */}
						<div className="col-md-1">
							<a href="" className="btn btn-default">
								<span className="glyphicon glyphicon-circle-arrow-right" />{" "}
								Share
							</a>
						</div>
						<div className="col-md-2">
							<a href="" className="btn btn-default">
								<span className="glyphicon glyphicon-align-justify" /> Comment
							</a>
						</div>

						<hr />

						<div className="media-left">
							<a href="">
								{/* Post image */}
								<img
									src={require("./img/test/post.png")}
									alt="Post"
									height="100px"
									width="100px"
								/>
							</a>
						</div>
						<div className="media-body">
							<h4 className="media-heading">Post #</h4>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
							interdum posuere nunc id vestibulum. Sed in nibh finibus, eleifend
							est vel, consequat massa. Ut nec metus pulvinar, faucibus felis
							laoreet, fermentum erat.
						</div>
						{/* Post's buttons Share and Comment */}
						<div className="col-md-1">
							<a href="" className="btn btn-default">
								<span className="glyphicon glyphicon-circle-arrow-right" />{" "}
								Share
							</a>
						</div>
						<div className="col-md-2">
							<a href="" className="btn btn-default">
								<span className="glyphicon glyphicon-align-justify" /> Comment
							</a>
						</div>

						<hr />

						<div className="media-left">
							<a href="">
								{/* Post image */}
								<img
									src={require("./img/test/post.png")}
									alt="Post"
									height="100px"
									width="100px"
								/>
							</a>
						</div>
						{/* Post text */}
						<div className="media-body">
							<h4 className="media-heading">Post #</h4>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
							interdum posuere nunc id vestibulum. Sed in nibh finibus, eleifend
							est vel, consequat massa. Ut nec metus pulvinar, faucibus felis
							laoreet, fermentum erat.
						</div>
					</div>
					{/* Post's buttons Share and Comment */}
					<div className="col-md-1">
						<a href="" className="btn btn-default">
							<span className="glyphicon glyphicon-circle-arrow-right" /> Share
						</a>
					</div>
					<div className="col-md-2">
						<a href="" className="btn btn-default">
							<span className="glyphicon glyphicon-align-justify" /> Comment
						</a>
					</div>

					<hr />
				</div>

				<div className=" col-md-offset-1 col-md-2">
					<hr />
					{/*  |LOGO| */}
					<img
						src={require("./img/test/sqIcon.png")}
						alt="Startup"
						height="100px"
						width="100px"
					/>
					<br />
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
					rutrum, massa eget bibendum venenatis, dolor tellus tempor tortor, at
					tristique lectus sapien sit amet mi. Morbi imperdiet luctus aliquet.
					<hr />
					<ul className="list-group">
						<li className="list-group-item">
							<span className="badge">#</span>
							Rank
						</li>
						<li className="list-group-item">
							<span className="badge">#</span>
							Posts
						</li>
						<li className="list-group-item">
							<span className="badge">#</span>
							Members
						</li>
						<li className="list-group-item">
							<span className="badge">#</span>
							Investors
						</li>
					</ul>
					<hr />
					<h5>Activities</h5>
					<ul className="list-group">
						<li className="list-group-item list-group-item-success">
							Dapibus ac facilisis in
						</li>
						<li className="list-group-item list-group-item-info">
							Cras sit amet nibh libero
						</li>
						<li className="list-group-item list-group-item-warning">
							Porta ac consectetur ac
						</li>
						<li className="list-group-item list-group-item-danger">
							Vestibulum at eros
						</li>
					</ul>
					<hr />
				</div>
			</div>
		);
	}
}

export default OpenProject;
