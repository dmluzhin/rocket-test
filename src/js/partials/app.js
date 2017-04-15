/*History API goes here*/
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

/*TweenMax aimations goes here*/

/*First page*/
TweenMax.from(".bg__stars", .45, {y:550});
TweenMax.staggerFrom(".bg__stars", 70, {rotation: -360, delay: .47});
TweenMax.from(".slide__title", .55, {y:550, delay:.07});
TweenMax.from(".bg__card-middle ", .55, {y:550, delay:.09});
TweenMax.from(".bg__card-right ", .55, {y:550, delay:.09});
TweenMax.from(".bg__card-left ", .65, {y:550, delay:.08, ease:Bounce.easeIn});

TweenMax.from(".scale__button-one", .5, {scale:0, delay:.7, ease:Bounce.easeOut});
TweenMax.from(".bg__clouds", .55, {y:150, delay:.4, ease:Bounce.easeInOut});

TweenMax.from(".film-sticker__container", .55, {scale:0, delay:.7, ease:Bounce.easeOut});
TweenMax.to(".film-sticker__container", .18, {scale:1.1, delay:3});
TweenMax.to(".film-sticker__container", .18, {scale:1, delay:3.1});
TweenMax.to(".film-sticker__blot", .18, {rotation:45, delay:3});

TweenMax.to(".scale__button-one", .18, {scale:1.1, delay:7});
TweenMax.to(".scale__button-one", .18, {scale:1, delay:7.1});
/*First page*/

/*Second page*/
TweenMax.staggerFrom(".screen__column-slide",.8, {y:500, ease: Elastic.easeInOut.config(1, 1.2)}, 0.5);
TweenMax.from(".screen__sticker", .8, {scale:0, delay:1, ease:Elastic.easeInOut.config(1, 1.2)});
TweenMax.from(".scale__button-two", .8, {scale:0, delay:1.1, ease:Elastic.easeInOut.config(1, 1.2)});
TweenMax.from(".bg__ticket-second",.8, {y:400., delay:1.1, ease: Elastic.easeInOut.config(1, 1.2)});
TweenMax.from(".bg__ticket-first",.8, {y:400., delay:1.15, ease: Elastic.easeInOut.config(1, 1.2)});
TweenMax.from(".fade__link",1, {opacity:0, delay:1.9});

TweenMax.to(".scale__button-two", .18, {scale:1.1, delay:7});
TweenMax.to(".scale__button-two", .18, {scale:1, delay:7.1});

TweenMax.to(".screen__sticker", .18, {scale:1.1, delay:3.2});
TweenMax.to(".screen__sticker", .18, {scale:1, delay:3.3});
/*Second page*/

/*Third page*/
TweenMax.from(".bg__phone",.8, {y:580, ease:Elastic.easeInOut.config(1, 1.2)});
TweenMax.from(".bg__city, .screen__right-column-title",.8, {y:500, delay:.1, ease:Elastic.easeInOut.config(1, 1.2)});
TweenMax.from(".bg__card-small",.8, {y:300, delay:.2, ease:Elastic.easeInOut.config(1, 1.2)});
/*Third page*/

/*Arrow*/
TweenMax.from(".screen__back-arrow", .25, {opacity:0, delay:2});