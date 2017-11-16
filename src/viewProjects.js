import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import {
	app,
	//facebookProvider,
	//githubProvider,
	//googleProvider
} from "./firebaseInitApp.js";

class viewprojects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpNeeded: '',
			projectDescription:'',
			projectTitle:'',
      Projects: []
    }
  }

  componentWillMount() {
		//This whole mess of a yolk calls render and displays everything on any change/load of page.
		//Thats as much as I know about it
    this.firebaseRef = app.database().ref("/Projects");
    this.firebaseRef.limitToLast(3).on('value', function(dataSnapshot) {
    var Projects = [];
		  dataSnapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item['.key'] = childSnapshot.key;
        Projects.push(item);
      }.bind(this));
      this.setState({
        Projects : Projects
      });
    }.bind(this));
  };


  componentWillUnmount() {
    this.firebaseRef.off();
  };

  render() {
    const Projects = this.state.Projects;
		//Mapping each project to a variable
		const proj = Projects.map((Projects) =>
			<div>
      <p key={Projects.key}>{Projects.projectTitle}</p>
  		<p key={Projects.key}>{Projects.projectDescription}</p>
			<p key={Projects.key}>{Projects.helpNeeded}</p>
			<br />
			</div>
    );

		//We need to make a div thing to make some sort of pretty display here.
		// Need to also sort them in order of newest first? Can't find how to do that anywhere.
		return (
      <div>
			<h1>Projects</h1>
			{proj}
      </div>
    );

  }
}
export default viewprojects;
