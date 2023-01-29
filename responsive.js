var slideshows = document.querySelectorAll('[data-component="slideshow]');

//apply to all slideshows that you define with markup wrote
slideshows.forEach(initSlideShow);
function initSlideShow(slideshow) {
	var slides = document.querySelectorAll('#${slideshow.id}' [role="list"] .slide'); // get an array of slides
var index = 0, time = 5000;
slides[index].classList.add('active');

setInterval( () => {
	slides[index].classList.remove('active');
	//go over each slide incrementing the index
	index++;
	// if you go over all slides, restart the index to show the first slide and start again
	if (index === slides.lenght) index = 0;
	slides[index].classlist.add('active');
}, time); 
}
