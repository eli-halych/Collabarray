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
    this.state = {
      userFullName: ""
    };

    this.hideAddName = this.hideAddName.bind(this);
  }

  componentWillMount() {

    var user = app.auth().currentUser;
    // console.log(user)
    var fullName = user.displayName
    this.state.userFullName = fullName

  }

  componentWillUnmount() {
    // this.firebaseRef.off();
  }

  displayFullName() {
    return (this.state.userFullName) ? (this.state.userFullName)

      : (

        <div>
          <div id="addName" className="addName">
            <i>Add name</i>
            <br />
            <a class="btn-floating waves-effect waves-light red" onClick={() => this.hideAddName()}><i class="material-icons">add</i></a>
          </div>


          <div id="fieldAddName" className="fieldAddName hide">
            <div className="container grey darken-4">
              <section className="add-item grey darken-4">
                <form >
                  <input
                    
                    type="text"
                    name="textComment"
                    placeholder="Comment"
                  />
                  <br />
                  <button className="btn waves-effect waves-light">
                    Add name
							</button>
                </form>
              </section>
            </div>

            
          </div>
        </div>

      )
  }

  hideAddName() {
    var addName = document.getElementById("addName");
    addName.classList.add("hide");

    var fieldAddName = document.getElementById("fieldAddName");
    fieldAddName.classList.remove("hide");
  }



  render() {




    return (
      <div className="Profile">

        <div className="row">
          <div className="col s5   offset-s1 row container hoverable z-depth-1">
            <table className="bordered centered highlighted responsive-table">
              <thead>
                <tr>
                  <th>Wall</th>
                </tr>
              </thead>
              <tbody>user's stuff</tbody>
            </table>
          </div>

          <div className="col s4 offset-s1 row container hoverable z-depth-1">
            <table className="bordered centered highlighted responsive-table">
              <thead>
                <tr>
                  <th>{this.displayFullName()}</th>
                </tr>
              </thead>
              <tbody>user's info</tbody>
            </table>
          </div>
        </div>

      </div>
    );
  }
}

export default Profile;
