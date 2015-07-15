// Document - variable in JS that gives you access to the objects and content within the web page you are viewing.

// $(document).ready is an event that occurs on our document when it is fully loaded and ready to go. Quite often, we want to wait for a page to finish loading before we use javascript to manipulate its contents. The ready event makes it easy for our code to start working at just the right moment.

// function() is how we define a code routine that can be run in javascript. In this specific scenario, it marks the beginning of what we call a callback, which is a function that gets called when an event (like the ready event) happens.

// When the document is ready (fully loaded) then do the actions inside the braces.
// $(document).ready(function(){}

// Short form:

$(function() {
	console.log("ready!");
	// This code will run after your page loads!
	$('#orb').click(function() {
		// $('body').addClass('black');	 <-- Makes button turn background black.
		// Instead let's create a toggle to switch between black and white background
		if ($('#orb').hasClass('sun')){
			$('#orb').removeClass('sun').addClass('moon');	
		}
		else {
			$('#orb').removeClass('moon').addClass('sun');
		}
	});

	$('#orb').click(function(){
		if ($('#sky').hasClass('day')){
			$('#sky').removeClass('day').addClass('night');
		}
		else {
			$('#sky').removeClass('night').addClass('day');
		}

		if($('#moonspot1').hasClass('visible')){
			$('#moonspot1').removeClass('visible');
		} else {
			$('#moonspot1').addClass('visible');
		}

		if($('#moonspot2').hasClass('visible')){
			$('#moonspot2').removeClass('visible');
		} else {
			$('#moonspot2').addClass('visible');
		}

		if($('#moonspot3').hasClass('visible')){
			$('#moonspot3').removeClass('visible');
		} else {
			$('#moonspot3').addClass('visible');
		}
	});

});