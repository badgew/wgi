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
		currentTime = moment();
		relativeTime = moment.tz('CET').format('hh:mm a');
		$(".relative-time").html("It's " + relativeTime + " GMT+1<br>in Brussels, Belgium.");
	}
	relativeTime();
	//var timer_timezone = window.setInterval(relativeTime, 1000); 
    // end timezone


    // screensaver
    var suitcasePath = "assets/";
    var mySuitcase = ["asterisk1.png", "asterisk2.png", "asterisk3.png"];
    // add as many pngs as I want

		var unpackSuitcase = function () {
			var index = Math.floor(Math.random()*mySuitcase.length);
      return suitcasePath + mySuitcase[index];
		};

    var addNewItem = function (){
      var image=document.createElement("img");
      image.src= unpackSuitcase();
      image.style.left=Math.random()*100 + '%';
      image.style.top=Math.random()*100 + '%';
      $('.suitcase-objects').append(image);
      moreItems=window.setTimeout(addNewItem, 1000);
    };

    var timer_screensaver; // the timer
    var moreItems;

var onMouseMove = function(){
      timer_screensaver=window.clearTimeout(timer_screensaver);
      timer_screensaver=window.setTimeout(addNewItem, 5000);
      moreItems=window.clearTimeout(moreItems);
      $('.suitcase-objects').html('');
};
    $(window).on('mousemove', onMouseMove);
    $(window).on('touchmove', onMouseMove);     
     
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

	$(".january").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".blog-january").offset().top-80},
	        'slow');
	});
    // end blog scroll
   });
})(jQuery);

