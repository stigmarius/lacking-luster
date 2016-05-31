var main = function() {
	
	$('#p0').addClass("hidden");
	$('#1').addClass("hidden");
	$('#2').addClass("hidden");
	
  }
  
  function clearprb() {
	/*var anropprb = $('#0')
	var dataprb = $('#1')
	var smsprb = $('#2')*/
	
	$('#p0').removeClass("visible").addClass("hidden");
	$('#1').removeClass("visible").addClass("hidden");
	$('#2').removeClass("visible").addClass("hidden");
  
  }
  
  $('#dd00').click(function() {
	  clearprb();
	  $('#p0').removeClass("hidden").addClass("visible");
	  $('#a01').removeClass("visible").addClass("hidden");
  });
  
  $('#dd01').click(function() {
	  clearprb();
	  /*var anropprb = $('#a0');
	  var anropInn = $('#a00');*/
	  
	  $('#p0').removeClass("hidden").addClass("visible");
	  $('#a00').removeClass("visible").addClass("hidden");
  });
  
   /* $('.data').click(function() {
	  clearprb();
	  var data = $('.data-prb');
	  
	  data.removeClass("hidden").addClass("visible");
  });
  
      $('.sms').click(function() {
	  clearprb();
	  var sms = $('.sms-prb');
	  
	  sms.removeClass("hidden").addClass("visible");
  });*/
  
  $(document).ready(main);