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
import "./Profile.css";
import $ from "jquery";
import "bootstrap-social";
import { position } from "tether";

//makes materialize-css work since it needs jquery and imports have to go at the top
window.jQuery = require("jquery");
require("materialize-css");





class Profile extends Component {
	constructor(props) {
		super(props);
		// this.state = {};
	}

	componentWillMount() {



	}

	componentWillUnmount() {
		this.firebaseRef.off();
	}

	

	render() {
  
    


		return (
			<div>
      </div>
		);
	}
}

export default Profile;
