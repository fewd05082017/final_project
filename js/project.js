// $(document).ready(function(){
// 	$("#hero").change(function(){

// 	}
// }

$("button").on("click", function(){
  $(this).next().slideToggle(500);
  $(this).find("span").toggleClass("fa-chevron-down");
  $(this).find("span").toggleClass("fa-minus");
});






// $(document).ready(function(){
 //  $('.your-class').slick({
 //  	arrows: false,
	// // dots:true,
	// centerMode:true
	// centerPadding: '60px',
 //  slidesToShow: 3,
 //  });


//   <!-- <script type="text/javascript">
//  $('.carousel').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: '.carousel'
// });
// $('.carousel').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.carousel',
//   dots: true,
//   centerMode: true,
//   focusOnSelect: true
// });
// </script> -->