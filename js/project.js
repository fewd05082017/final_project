// $("#menu").on("click", function(){
// 	$("nav").slideToggle(400);
//   	/
// });

$(document).ready(function(){
  $(".projects").click(function(){
    // The long way
    // var wrapper = $(this).find(".wrapper");
    // if (wrapper.css("display") == "none"){
    //   wrapper.slideDown(400);
    // }
    // else {
    //   wrapper.slideUp(400);
    // }
    // var icon = $(this).find("span");
    // if(icon.hasClass("fa-chevron-down")) {
    //   icon.removeClass("fa-chevron-down");
    //   icon.addClass("fa-chevron-up");
    // }
    // else {
    //   icon.removeClass("fa-chevron-up");
    //   icon.addClass("fa-chevron-down");
    // }
    // var row = $(this); // ".row"
 
    // The better way!
    $(this).find(".accordion").slideToggle(400, function(){
      $(this).css("display", "block");
      // $(this).parent(); // ".row"
    });
  //   $(this).find("span").toggleClass("fa-chevron-down fa-chevron-up");
  // });
});