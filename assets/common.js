$(document).ready(function() {
	$.waypoints.settings.scrollThrottle = 30;
	$('#container').waypoint(function(event, direction) {
		$('.top').toggleClass('hidden', direction === "up");
	}, {
		offset: '-50%'
	}).find('#sidebar').waypoint(function(event, direction) {
		$(this).parent().toggleClass('sticky', direction === "down");
		event.stopPropagation();
	});
});
