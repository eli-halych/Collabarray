import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import firebase from 'firebase';

import SignIn from './SignIn.js';
import Header from './Header.js';
import Footer from './Footer.js';

import { app } from './firebaseInitApp.js';



class App extends Component {

  constructor(){
          super();
          this.state = {
            authenticated: false
          }
  }

  componentWillMount(){
    this.removeAuthListener = app.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true
        })
      }
      else {
        this.setState({
          authenticated: false
        })
      }
    })
  }

  componentWillUnmount(){
    this.removeAuthListener();
  }

  render() {
    return (
      <div className="App">
        
        <Header authenticated={this.state.authenticated} />
        <SignIn />
        <Footer />

      </div>
    );
  }
}

export default App;
