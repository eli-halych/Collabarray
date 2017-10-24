// Get elements
var projectTitle = document.getElementById('projectTitle');
var projectDescription = document.getElementById('projectDescription');
var projectTags = document.getElementById('projectTags');
var helpNeeded = document.getElementById('helpNeeded');
var addProjectBtn = document.getElementById('addProjectBtn');


// Add login and user
$('#addProjectBtn').on('click', e => { //Callback function
    // Get email and password
    var title = $('#projectTitle').value;
    var description = $('#projectDescription').value;
    var tags= $('#projectTags').value;
    var help = $('#helpNeeded').value;
    var auth = firebase.auth();
	console.log("Yay! It works :D");
    // Add project Stuff??????

    var promise = auth.addUserProject(title, description, tags, help);
    console.log('successful authentication');
    promise.catch(e => console.log(e.code + ": " + e.message));
});
