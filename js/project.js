$(document).ready(function(){
  $(".projects").click(function(){

  	var project = $(this);

    project.find(".accordion").slideToggle(700, function(){

    	// console.log(project.find("span").html());

    	project.toggleClass("open");

    	if (project.hasClass("open")) {
			project.find("span").html(" &#8722;");
		}
		else {
			project.find("span").html(" &#43;");
		}

  //   	if (project.find("span").html() == " &#43;") {
		// 	project.find("span").html(" &#8722;");
		// }
		// else {
		// 	project.find("span").html(" &#43;");
		// }
		
    });
  });
});