var quoteBtn = document.getElementById('mega-menu-item-3035');

quoteBtn.addEventListener('click', function(e){
	e.preventDefault();
	quoteBtn.classList.add('modal-popup');
	quoteBtn.setAttribute('data-target', '#popup-2900');

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

	//set modal display
	customPopBox.style.display = 'block';
	
});

//hide popbox when exit button is clicked
var popBoxClose = document.getElementsByClassName('fa-close');

popBoxClose[0].addEventListener('click', function(){
	var customPopBox = document.getElementById('popup-2900');
	customPopBox.style.display = 'none';
});
