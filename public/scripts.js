/*var email="sample@gmail.com";
var password="password";

firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("This is is the Error Code: " + errorCode);
    console.log("This is is the Error Message: " + errorMessage);
});*/
var gitProvider = new firebase.auth.GithubAuthProvider();
firebase.auth().signInWithPopup(gitProvider).catch(function(error) {
    // An error happened.
    if (error.code === 'auth/account-exists-with-different-credential') {
        // Step 2.
        // User's email already exists.
        // The pending GitHub credential.
        var pendingCred = error.credential;
        // The provider account's email address.
        var email = error.email;
        // Get registered providers for this email.
        auth.fetchProvidersForEmail(email).then(function(providers) {
            // Step 3.
            // If the user has several providers,
            // the first provider in the list will be the "recommended" provider to use.
            if (providers[0] === 'password') {
                // Asks the user his password.
                // In real scenario, you should handle this asynchronously.
                var password = promptUserForPassword(); // TODO: implement promptUserForPassword.
                auth.signInWithEmailAndPassword(email, password).then(function(user) {
                    // Step 4a.
                    return user.link(pendingCred);
                }).then(function() {
                    // GitHub account successfully linked to the existing Firebase user.
                    goToApp();
                });
                return;
            }
            // All the other cases are external providers.
            // Construct provider object for that provider.
            // TODO: implement getProviderForProviderId.
            var provider = getProviderForProviderId(providers[0]);
            // At this point, you should let the user know that he already has an account
            // but with a different provider, and let him validate the fact he wants to
            // sign in with this provider.
            // Sign in to provider. Note: browsers usually block popup triggered asynchronously,
            // so in real scenario you should ask the user to click on a "continue" button
            // that will trigger the signInWithPopup.
            auth.signInWithPopup(provider).then(function(result) {
                // Remember that the user may have signed in with an account that has a different email
                // address than the first one. This can happen as Firebase doesn't control the provider's
                // sign in flow and the user is free to login using whichever account he owns.
                // Step 4b.
                // Link to GitHub credential.
                // As we have access to the pending credential, we can directly call the link method.
                result.user.link(pendingCred).then(function() {
                    // GitHub account successfully linked to the existing Firebase user.
                    goToApp();
                });
            });
        });
    }
});


var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;

firebase.auth().onAuthStateChanged(function(user) {
    if (user != null) {
        // User is signed in.
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
    } else {
        // No user is signed in.
    }
});
