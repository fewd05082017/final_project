// PORTFOLIO JS STARTS HERE
$(".thumb").on("mouseenter", function() {
	var image = $(this).attr("src");
	$("#bigimage").hide();
	$("#bigimage").attr("src", image);
	$("#bigimage").fadeIn(500);
});

// Working on a function that tells the #bigimage to find the corresponding
// anchor so that when the viewer clicks on the big image, it links
// out to the article page
// $("#bigimage").on("click", function() {
// 	var link = $(this).attr("a");

// });



