$(document).ready(function () {

	$(".click1").click(function () {
		$('.para1').toggle();
	});

	$(".click2").click(function () {
		$('.para2').toggle();
	});


	$(".click3").click(function () {
		$('.para3').toggle();
	});

	$(".click4").click(function () {
		$('.para4').toggle();
	});

	
 
	
	$('#countdown').countdown({

	    year: 2025, // YYYY Format

	    month: 1, // 1-12

	    day: 1, // 1-31

	    hour: 0, // 24 hour format 0-23

	    minute: 0, // 0-59

	    second: 0, // 0-59

	  });
	
	
	
});




