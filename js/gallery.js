$(document).ready(function() {
	$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
		id: "66747472@N07",
		format: "json"
	}, function(data) {
		$.each(data.items, function(i, item) {
			$("<img />")
			.attr("src", item.media.m)
			.addClass("frame")
			.appendTo("#gallery");
			if (i == 11) return false;
		});
	});
});