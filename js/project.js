// HOME PAGE JS STARTS HERE
  $("body").mouseenter(function() {
    $("h1").fadeIn(2000);
  });

  $("body").mouseenter(function() {
    $("h2").delay(1000).fadeIn(2000);
  });

// PORTFOLIO JS STARTS HERE
$(".thumbnail").simpleLightbox({
	showCounter: false
});

// Something like this to make the link to article appear on mouseover of big image
// $(".sl-image").on("mouseover").find(this)


// to add caption, it looks like this
// if ("captionType" == text)
// $(this).find(".caption").html()