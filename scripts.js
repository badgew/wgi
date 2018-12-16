



(function($) {
   $(document).ready(function(){

   	 var months = $('.month-input');
   	 var closeMonths = function(currentMonth) {
   	 	months.each(function(i, e) {
   	 		if(currentMonth != e) {
   	 			$( e ).prop( "checked", false );
   	 		}
   	 	});
   	 }
   	 
   	 months.click(function(e) {
   	 	closeMonths(this);
   	 });

   	 $(".blog-plus").click(function(e){
   	 	$(".right").toggleClass("active");
   	 });

   	 // timezones

	var relativeTime = function(){
		currentTime = moment(new Date());
		relativeTime = moment.tz("UTC").format('hh:mm a');
		$(".relative-time").html("It's " + relativeTime + " UTC<br>in London, England.");
	}
	relativeTime();
	window.setInterval(relativeTime, 10000);

  // end timezone

  // blog scroll

	$(".october").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".blog-october").offset().top-80},
	        'slow');
	});

	$(".november").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".blog-november").offset().top-80},
	        'slow');
	});

	$(".december").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".blog-december").offset().top-80},
	        'slow');
	});

	// end blog scroll
   });
})(jQuery);