var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;

firebase.auth().onAuthStateChanged(function(user) {
  if (user != null) {
    // User is signed in.
    name = user.displayName;
  	email = user.email;
  	photoUrl = user.photoURL;
  	emailVerified = user.emailVerified;
  	uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
  	                 // this value to authenticate with your backend server, if
  	                 // you have one. Use User.getToken() instead.
  } else {
    // No user is signed in.
  }
});
