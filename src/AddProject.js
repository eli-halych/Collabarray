import React, { Component } from "react";
import "./Main.css";
import {
	// Redirect,
	//Router,
	// Route,
	//Link,
	// NavLink
	//HashRouter,
  BrowserRouter,
  // Switch
} from "react-router-dom";



class AddPoject extends Component {
	render() {
		return (
			<BrowserRouter>
      <div className="AddProject">
      <div className="border col-md-6">
					Add project code here
			</div>
      </div>
    </BrowserRouter>
		);
	}
}

export default AddPoject;
