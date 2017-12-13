import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "../node_modules/bootstrap-social/bootstrap-social.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "bootstrap-social";
//makes materialize-css work since it needs jquery and imports have to go at the top
window.jQuery = require("jquery");
require("materialize-css");

class ChatInput extends Component {
	constructor(props) {
		super(props);
		this.state = { chatInput: "" };

		// React ES6 does not bind 'this' to event handlers by default
		this.submitHandler = this.submitHandler.bind(this);
		this.textChangeHandler = this.textChangeHandler.bind(this);
	}

	submitHandler(event) {
		// Stop the form from refreshing the page on submit
		event.preventDefault();

		// Clear the input box
		this.setState({ chatInput: "" });

		// Call the onSend callback with the chatInput message
		this.props.onSend(this.state.chatInput);
	}

	textChangeHandler(event) {
		this.setState({ chatInput: event.target.value });
	}

	render() {
		return (
			<form className="chat-input col s12" onSubmit={this.submitHandler}>
				<div className="input-field col s12">
					<i className="material-icons prefix">comment</i>

					<input
						type="text"
						onChange={this.textChangeHandler}
						value={this.state.chatInput}
						required
					/>
					<label htmlFor="text">Write a message:</label>
				</div>
				<button type="submit" className="btn waves-effect waves-light">
					Send<i className="material-icons right">send</i>
				</button>
			</form>
		);
	}
}

ChatInput.defaultProps = {};

export default ChatInput;
