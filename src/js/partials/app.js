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

TweenMax.from(".bg__stars", .45, {y:550});
TweenMax.staggerFrom(".bg__stars", 70, {rotation: -360, delay: .47});
TweenMax.from(".screen__title-text", .45, {y:550, delay:.07});
TweenMax.from(".bg__card-middle ", .45, {y:550, delay:.09});
TweenMax.from(".bg__card-right ", .45, {y:550, delay:.09});