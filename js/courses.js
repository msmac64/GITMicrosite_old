$("document").ready(function() {
	
	//Courses Filter
	/* fadeHelper takes a jQuery selector as an argument
	   and returns a function which, when called, will 
	   wait 600ms and then fade that element out.
	   
	   You can think of fadeHelper as something of a 
	   "callback factory" that manufactures a callback
	   tailored to the element it receives as an argument.
	*/
	
	var fadeHelper = function(elem) {
		return function() {
			setTimeout(function() {
				$(elem).fadeIn("slow");
			}, 600);
		}
	}

	//alert ("the page just loaded");
	
	//fades out all courses and fades in courses of interest
	$("#lower").click(function(){
		$("#courses li").fadeOut("slow", 
			fadeHelper("li.lower")
		);
	});
	
	
	$("#upper").click(function(){
		$("#courses li").fadeOut("slow", 
			fadeHelper("li.upper")
		);
	});
	
	$("#digital").click(function(){
		$("#courses li").fadeOut("slow", 
			fadeHelper("li.digital")
		);
	});
	
	$("#gaming").click(function(){
		$("#courses li").fadeOut("slow", 
			fadeHelper("li.gaming")
		);
	});
	
	$("#imaging").click(function(){
		$("#courses li").fadeOut("slow", 
			fadeHelper("li.imaging")
		);
	});
	
	$("#reproduction").click(function(){
		$("#courses li").fadeOut("slow", 
			fadeHelper("li.reproduction")
		);
	});
	
	$("#web").click(function(){
		$("#courses li").fadeOut("slow", 
			fadeHelper("li.web")
		);
	});
	
	$("#reset").click(function(){
		$("#courses li").fadeOut("slow", 
			fadeHelper("#courses li")
		);
	});
});
