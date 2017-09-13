console.log('homepage.js loaded');

$(document).ready(function() {
 // executes when HTML-Document is loaded and DOM is ready
  
  
	//http://stackoverflow.com/a/14805615/3853728
	$('a[href^="#"]').not(".carousel-control-next, .carousel-control-prev").click(function(e){     
	    event.preventDefault();
	    $('html,body').animate({scrollTop:$(this.hash).offset().top -100}, 2000);
	    //
	    $('.navbar-collapse').collapse('hide')
	});




// document ready  
});


window.onload = function() {
 // executes when complete page is fully loaded, including all frames, objects and images
//console.log("window is loaded");
  
  
// window load  
};


