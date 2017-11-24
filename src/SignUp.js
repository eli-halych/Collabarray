import React, { Component } from "react";
import "./SignIn.css";
import "../node_modules/bootstrap-social/bootstrap-social.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
// import firebase from 'firebase';
import {
	app,
	//facebookProvider,
	//githubProvider,
	//googleProvider
} from "./firebaseInitApp.js";



class SignUp extends Component {
	constructor() {
    super();
    this.state = {
			firstName: '',
      lastName: '',
      email: ''
    }
		this.handleChange = this.handleChange.bind(this);
 		this.handleSubmit = this.handleSubmit.bind(this);
  }
		handleSubmit(e) {
	  e.preventDefault();
	  const itemsRef = app.database().ref('Users');
	  const item = {
			firstName: this.state.firstName,
	    lastName: this.state.lastName,
			email: this.state.email
	  }
	  itemsRef.push(item);
	  this.setState({
			firstName: '',
	    lastName: '',
	    email: ''
	  });
	}
	handleChange(e) {
  this.setState({
    [e.target.name]: e.target.value
  });
}


  render() {
    return (
      <div className='SignUp'>
        <header>
            <div className='wrSignUper'>
              <h1>Sign Up</h1>

            </div>
        </header>
        <div className='container'>
          <section className='add-item'>
              <form onSubmit={this.handleSubmit}>
                <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange} value={this.state.firstName}/>
                <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange} value={this.state.lastName}/>
                <input type="text" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.email}/>
								<button>Sign Up</button>
              </form>
          </section>

        </div>
      </div>
    );
  }
}
export default SignUp;
