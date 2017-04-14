$(document).ready(function() {
	$(document).on('click', '.history', function(e) {
		e.preventDefault();

		var href = $(this).attr('href');
		getContent(href, true);
	})

});

window.addEventListener("popstate", function(e){

	getContent(location.pathname, false);

});

/*var doc = document;*/

function getContent(url, addEntry) {
	$.get(url).done(function(data) {

		$('#content').html($(data).find('#content').html());
		if(addEntry == true) {

			history.pushState(null, null, url);
		}

	});
}