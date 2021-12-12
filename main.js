//=========menuButton==========
let aboutProductsBtn = document.getElementById("aboutProducts");	
let galeryBtn = document.getElementById("galery");
let contactsBtn = document.getElementById("contacts");
let aboutUsBtn = document.getElementById("aboutUs");
let heder = document.getElementById("header");
let carousel = document.getElementById("carouselBox");
let social = document.querySelector(".navSocial");


aboutProductsBtn.addEventListener('click', () => {	
	let benefitSection = document.getElementById("newPage"),
		closeBtn = document.getElementById("close");		

		heder.style.display = "none";
		carousel.style.display = "none";
		social.style.display = "none";

	benefitSection.style.display = 'flex';
	closeBtn.addEventListener("click", () => {
		benefitSection.style.display = 'none';

		heder.style.display = "flex";
		carousel.style.display = "flex";
		social.style.display = "flex";
	})
})


galeryBtn.addEventListener('click', () => {	
	let benefitSection = document.getElementById("newPage"),
		closeBtn = document.getElementById("close");		

		heder.style.display = "none";
		carousel.style.display = "none";
		social.style.display = "none";

	benefitSection.style.display = 'flex';
	closeBtn.addEventListener("click", () => {
		benefitSection.style.display = 'none';

		heder.style.display = "flex";
		carousel.style.display = "flex";
		social.style.display = "flex";
	})
})


contactsBtn.addEventListener('click', () => {	
	let benefitSection = document.getElementById("newPage"),
		closeBtn = document.getElementById("close");		

		heder.style.display = "none";
		carousel.style.display = "none";
		social.style.display = "none";

	benefitSection.style.display = 'flex';
	closeBtn.addEventListener("click", () => {
		benefitSection.style.display = 'none';

		heder.style.display = "flex";
		carousel.style.display = "flex";
		social.style.display = "flex";
	})
})


aboutUsBtn.addEventListener('click', () => {	
	let benefitSection = document.getElementById("newPage"),
		closeBtn = document.getElementById("close");		

		heder.style.display = "none";
		carousel.style.display = "none";
		social.style.display = "none";

	benefitSection.style.display = 'flex';
	closeBtn.addEventListener("click", () => {
		benefitSection.style.display = 'none';

		heder.style.display = "flex";
		carousel.style.display = "flex";
		social.style.display = "flex";
	})
})



   

  //=====slider====

let _sliderContainer = document.querySelector('.slides'); 
let _sliderItems = document.querySelectorAll('.sliderItem');   
let _currentPosition = 0;            
let _itemsArray = [];  



for (let i = 0, length = _sliderItems.length; i < length; i++) {

    _itemsArray.push({ item: _sliderItems[i], position: i, transform: 0 });
}

setInterval(function(){
    if(_currentPosition >= _itemsArray.length) {
       
      _currentPosition = 0;

    }         

   ( function goToItem(_currentPosition) {
	    let left = '-' + (_currentPosition * 100) + 'vw';   
	    _sliderContainer.style.left = left; 
	    

	})(_currentPosition++);    
}, 2500)



















