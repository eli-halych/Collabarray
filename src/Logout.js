import React, { Component } from "react";
import { Spinner } from "@blueprintjs/core"; 
import { app } from "./firebaseInitApp.js";
import {
	Redirect,
	//Router,
	//Route,
	//Link,
	// NavLink,
	//HashRouter,
	//BrowserRouter
} from "react-router-dom";

import "./Logout.css";
import "bootstrap-social";

const Loading = { 
	textAlign: "center", 
	position: "absolute", 
	top: "25%", 
	left: "50%" };

class Logout extends Component {
  constructor(){
    super()
    this.state = {
      redirect: false
    }
  }

  componentWillMount(){
    app.auth().signOut().then((user) => {
      this.setState({ redirect: true })
    });
  }

	render() {
		return (
        this.state.redirect === true 
        ?
           <Redirect to="/" />
        :
          <div style={Loading}>
            <h3>Logging out</h3>
            <Spinner />
          </div>
		);
	}
}

export default Logout;
