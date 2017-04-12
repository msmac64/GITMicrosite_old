$(document).ready(function() {
	$('#resultsBox').hide();
	$('button').click(function() {
		var resourceLinks = $('form :checked');
		if (resourceLinks.length === 0) {
			alert("You must choose at least one resource before clicking button!");
			$('.resultsText').hide();
		}
		$.each(resourceLinks, function(i, field) {
			var displayText = $("label[for='" + field.id + "']").html();
			var link = '<a href="' + field.value + '" target="_blank">' + displayText + '</a><br/>';
			$('.resultsText').show();
			$('#resultsBox').append(link).addClass('linkColor a');
		});
		$('#resultsBox').show();
	});
	//reset button
	$('#btn').click(function(){
	/* Single line Reset function executes on click of Reset Button */
		$('#resources')[0].reset();
		$('input:checkbox').removeAttr('checked');
		$('#resultsBox').hide();
	});
});