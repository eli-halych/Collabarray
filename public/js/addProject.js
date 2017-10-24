// Get elements
var ProjectTitle = document.getElementById('ProjectTitle');
var ProjectDescription = document.getElementById('ProjectDescription');
var projectTags = document.getElementById('projectTags');
var helpneeded = document.getElementById('helpneeded');
var addProjectBtn = document.getElementById('addProjectBtn');


// Add login and user
addProjectBtn.addEventListener('click', e => { //Callback function
    // Get email and password
    var title = ProjectTitle.value;
    var description = ProjectDescription.value;
    var tags=projectTags.value;
    var needed=helpneeded.value;
    var auth = firebase.auth();

    // Add project Stuff??????

    var promise = auth.addUserProject(title, description, tags, needed);
    console.log('successful authentication');
    promise.catch(e => console.log(e.code + ": " + e.message));
});
