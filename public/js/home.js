// Get elements
var txtEmail = document.getElementById('txtEmail');
var txtPassword = document.getElementById('txtPassword');
var btnLogIn = document.getElementById('btnLogIn');
var btnLogOut = document.getElementById('btnLogOut');
var btnSignUp = document.getElementById('btnSignUp');
var btnSignInGoogle = document.getElementById('btnSignInGoogle');
var btnSignInGithub = document.getElementById('btnSignInGithub');


// Add login and user
btnLogIn.addEventListener('click', e => { //Callback function
    // Get email and password
    var email = txtEmail.value;
    var password = txtPassword.value;
    var auth = firebase.auth();
    // Sign in
    var promise = auth.signInWithEmailAndPassword(email, password);
    console.log('successful authentication');
    promise.catch(e => console.log(e.code + ": " + e.message));
});

// Sign out
btnLogOut.addEventListener('click', e => {
    firebase.auth().signOut();
    txtEmail.value = "";
    txtPassword.value = "";
});

// Add signup event with password
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
        .catch(e => console.log(e.code + ": " + e.message));
});

/* This needs to be on a domain before it works */
btnSignInGoogle.addEventListener('click', e => {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
        'allow_signup': 'true'
    });
    firebase.auth().useDeviceLanguage();
    firebase.auth().signInWithPopup(provider).catch(e => {
        // An error happened.
        if (e.code === 'auth/account-exists-with-different-credential') {
            // User's email already exists
            console.log("User's email exists with another account");
            alert("An account with this email is already in use!");
        }
    });
})
/* This needs to be done before it works -> https://github.com/settings/developers */
btnSignInGithub.addEventListener('click', e => {
    var provider = new firebase.auth.GithubAuthProvider();
    provider.setCustomParameters({
        'allow_signup': 'true'
    });
    var auth = firebase.auth();
    auth.useDeviceLanguage();
    auth.signInWithPopup(provider).catch(e => {
        // An error happened.
        if (e.code === 'auth/account-exists-with-different-credential') {
            // User's email already exists
            console.log("User's email exists with another account");
            alert("An account with this email is already in use!");
        }
    });
})

// Add a realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        // User is signed in
        var name, email, photoUrl, uid, emailVerified;
        name = firebaseUser.displayName;
        email = firebaseUser.email;
        photoUrl = firebaseUser.photoURL;
        emailVerified = firebaseUser.emailVerified;
        uid = firebaseUser.uid; // The user's unique ID to the Firebase project
        console.log(firebaseUser + "logged in");
        btnLogOut.classList.remove('hide');
        btnLogIn.classList.add('hide');
        btnSignUp.classList.add('hide');
        btnSignInGithub.classList.add('hide');
        btnSignInGoogle.classList.add('hide');
    } else {
        // No user is signed in
        console.log('Not logged in');
        btnLogOut.classList.add('hide');
        btnLogIn.classList.remove('hide');
        btnSignUp.classList.remove('hide');
        btnSignInGithub.classList.remove('hide');
        btnSignInGoogle.classList.remove('hide');
    }
});
