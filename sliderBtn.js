var sliderBtn = document.querySelector('.formTrigger');

sliderBtn.addEventListener('click', function(e){
	e.preventDefault();
	sliderBtn.classList.add('modal-popup');
	sliderBtn.setAttribute('data-target', '#popup-2900');

	var customPopBox = document.getElementById('popup-2900');

	//set modal classes
	customPopBox.classList.add('modal');
	customPopBox.classList.add('fade');
	customPopBox.classList.add('in');

	//set modal attributes
	customPopBox.setAttribute('tabindex', '-1');
	customPopBox.setAttribute('role', 'dialog');
	customPopBox.setAttribute('aria-labelledby', 'popup-2900-label');
	customPopBox.setAttribute('aria-hidden', 'false');

	//set modal mdisplay
	customPopBox.style.display = 'block';
	
});

//hide popbox when exit button is clicked
var popBoxClose = document.querySelector('#popup-2900 > .modal-content > button > span > .fa-close');

popBoxClose[0].addEventListener('click', function(){
	var customPopBox = document.getElementById('popup-2900');
	customPopBox.style.display = 'none';
});

sliderBtn.addEventListener('click', function(e){
	e.preventDefault();
	console.log('hello')

});
