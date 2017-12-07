import React, { Component } from "react";
import "./Footer.css";
import $ from "jquery";
import "bootstrap-social";

//makes materialize-css work since it needs jquery and imports have to go at the top
window.jQuery = require("jquery");
require("materialize-css");

class Footer extends Component {
	render() {
		return (
			<div className="Footer">
				<footer className="footer">
					{/* <div className="container"> */}
					<span className="text-muted">Collabarray © 2017</span>
					{/* </div> */}
				</footer>
			</div>
		);
	}
}

export default Footer;
