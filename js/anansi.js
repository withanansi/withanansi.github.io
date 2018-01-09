//alert("Hey Teatime users!");

//because the rest of the page hasn't loaded yet
//as the script tags are in the <head>
//wait for the page to be ready

//document is a special javascript word for the page in general

$(document).ready(function () {

	//add my code is going to go in here
	//otherwise the page hasn't properly loaded yet

	//instructions are
	//when i click on the hamburger button
	//show the nav

	$("a#showmenu").on("click", function () {
	
		//if the nav is visible, say hide menu
		//else, then say show menu

		if ( $("nav").is(":visible") ) {
			$("a#showmenu").html("Show menu");

		}
		
		else {
			$("a#showmenu").html("Hide menu");

		}

		$("nav").slideToggle();

		//because this is a link, stop it from following where it wants to go
		return false;

	});

	//instructions
	//when I click on the nav slide link
	//scroll down the page using jquery animate

	$("nav a.slide").on("click", function () {

		//find the link we've just clicked on and get its href
		var link = $(this).attr("href");

		//find the section based on that link
		//this will change in the browser
		//work out how far it is from the top of the page. can do .left.top etc
		var section = $("section" + link).offset().top;

		//just for full version
		//we're checking if the window eg the browser
	  //width is bigger than 800
	  //if it is, then remove 75px from the scroll

		if ($(window).width() > 800) {
			section -=75;
		}

		//animate the page scroll 
		//to make the body scroll top position go to 1000px down in 500ms 
		$("body").animate({ scrollTop: section}, 500);


		//stop the defualt thing, which is jumping to that section
		return false;

		//



	});

});