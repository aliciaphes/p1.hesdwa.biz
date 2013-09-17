$( document ).ready(function() {
//hide content as soon as page loads
	$("#bio").hide();
	$("#editors").hide();

//animate block when clickion on its id to show content
	$( "#bio-title" ).click(function() {
		$( "#bio" ).animate({
			height: "toggle"
		}, 500);
	});  

	$( "#editors-title" ).click(function() {
		$( "#editors" ).animate({
			height: "toggle"
		}, 500);
	}); 	
});



