var main = function() {
	
	$('#prob').find("div").removeClass('visible').addClass('hidden');
	//alert(document.getElementById("p0").className);
	
	$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
		prevSl();
        break;

        case 39: // right
		nxtSl();
        break;
		
        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
	
	$('.edit_area').editable('/index.html', {
         type      : 'textarea',
         cancel    : 'Cancel',
         submit    : 'OK',
         indicator : '<img src="img/indicator.gif">',
         tooltip   : 'Click to edit...'
     });
});
	
	function nxtSl() {
		var currentSlide = $(".active");
		var nextSlide = currentSlide.next("div");
		
		var currentDot = $('.active-dot');
		var nextDot = currentDot.next();
		
		if(nextSlide.length === 0){
			
		}
		else {
	
		currentSlide.fadeOut(200).removeClass('active visible').addClass("hidden");
		nextSlide.fadeIn(200).removeClass("hidden").addClass('visible active');
		
		currentDot.removeClass('active-dot');
		nextDot.addClass('active-dot');
		}
	}
	
	function prevSl() {
		var currentSlide = $(".active");
		var prevSlide = currentSlide.prev("div");
		
		var currentDot = $('.active-dot');
		var prevDot = currentDot.prev();
		
		if(prevSlide.length === 0){
			
		}
		else {
	
		currentSlide.fadeOut(200).removeClass('active visible').addClass("hidden");
		prevSlide.fadeIn(200).removeClass("hidden").addClass('visible active');
		
		currentDot.removeClass('active-dot');
		prevDot.addClass('active-dot');
		}
	}
	
	$('.arrow-next').click(function(){
		nxtSl();
	}); 
	
	$('.arrow-prev').click(function(){
		prevSl();
	}); 
}
  
  function clr() { //Skjuler alle children til #prob som er øverste parent og fjerner eventuell active-klasse.
	  $('#prob').find("div").removeClass('visible').addClass('hidden');
	  $(".slider-nav").removeClass("hidden").addClass("visible");
	  $('#prob').find("div").removeClass('active');
	  //Resetter navigasjons-punktene nederst på siden
	  $("#slDot").find("li").removeClass("active-dot");
	  $("#topDot").addClass("active-dot");
  }
 
	
	$("#da000").click(function() { //anrop innkommende
		clr();
		$("#p0, #a00, #a000").removeClass("hidden").addClass("visible");
		$("#a000").addClass("active");
		//alert(document.getElementById("a000").className);
	});
	
	$("#da010").click(function() { //anrop utgående
		clr();
		$("#p0, #a01, #a010").removeClass("hidden").addClass("visible");
		$("#a010").addClass("active");
	});
	
	$("#da020").click(function() {	//anrop brudd/ustabilitet
		clr();
		$("#p0, #a02, #a020").removeClass("hidden").addClass("visible");
	});
  
  $(document).ready(main);