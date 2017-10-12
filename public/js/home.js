// Get elements
var txtEmail = document.getElementById('txtEmail');
var txtPassword = document.getElementById('txtPassword');
var btnLogIn = document.getElementById('btnLogIn');
var btnSignUp = document.getElementById('btnSignUp');
var btnLogOut = document.getElementById('btnLogOut');

// Add login and user
btnLogIn.addEventListener('click', e => { //Callback function
  // Get email and password
  var email = txtEmail.value;
  var password = txtPassword.value;
  var auth = firebase.auth();
  // Sign in
  var promise = auth.signInWithEmailAndPassword(email, password);
  console.log('successful authentication');
  promise.catch(e => console.log(e.message));
});

// Add signup event
btnSignUp.addEventListener('click', e => {
  // Get email and password
  // TODO: CHECK FOR REAL EMAIL
  var email = txtEmail.value;
  var password = txtPassword.value;
  var auth = firebase.auth();
  // Sign up
  var promise = auth.createUserWithEmailAndPassword(email, password);
  console.log('successful authentication');
  promise
    .then(user => console.log(user))
    .catch(e => console.log(e.message));
});

// Sign out
btnLogOut.addEventListener('click', e => {
  firebase.auth().signOut();
});

// Add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log(firebaseUser);
      btnLogOut.classList.remove('hide');
    } else {
      console.log('Not logged in');
      btnLogOut.classList.add('hide');
    }
  });
