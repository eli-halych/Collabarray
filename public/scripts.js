// Initialize Firebase
var config = {
	apiKey: "AIzaSyCvV09DtCgNoshpAXot5V0dMLeD-Dfhwp8",
	authDomain: "collabarray-953db.firebaseapp.com",
	databaseURL: "https://collabarray-953db.firebaseio.com",
	projectId: "collabarray-953db",
	storageBucket: "collabarray-953db.appspot.com",
	messagingSenderId: "978577647128"
};
firebase.initializeApp(config);
$(document).ready(function () {
	$(".dropdown").hover(function () {
		$(this).children(".sub-menu")
		.stop(true, false, true)
		.animate({
			height: "toggle"
		}, 300);
		
	});
});
