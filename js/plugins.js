//                                  Local Storage
// First => Main color
let mainColor = localStorage.getItem('color-option');

if ( mainColor !== null ) {
	document.documentElement.style.setProperty('--main-color', mainColor);

	// Remove active class from all colors List Item 
	document.querySelectorAll('.colors-list li').forEach(element => {

		element.classList.remove('active');

		// Add active class on element from Data-color === local storage item
		if( element.dataset.color === mainColor ) {
			element.classList.add('active');
		}
	})
}

// End Local Storage

// Start Main Function To Scroll To Sections

// Select All Bullets
const allBullets = document.querySelectorAll('.bullet');

// Select All Links
const allLinks = document.querySelectorAll('.links a');

function scrollToSection(links) {

	links.forEach(link => {

		link.addEventListener('click', (e) => {
	
			e.preventDefault();
	
			document.querySelector(e.target.dataset.section).scrollIntoView({
	
				behavior : 'smooth'
			});
		});
	});
};

scrollToSection(allBullets);
scrollToSection(allLinks);

// End Main Function To Scroll To Sections


// Start Main Function To Handle Active Class

function handleActive(ev) {

	// Remove Active Class From All Elements
	ev.target.parentElement.querySelectorAll('.active').forEach(element => {

		element.classList.remove('active');
	});

	// Add Active Class On Self ( Target )
	ev.target.classList.add('active');
}


// End Main Function To Handle Active Class



// Start Settings box

const settingsBox = document.querySelector('.settings-box'),
	  gearIcon = document.querySelector('.gear-icon');

// Toggle Class fa-spin For Rotation
	gearIcon.onclick = function() {
	this.classList.toggle('fa-spin');

	// Toggle Class Open on Main settings box
	settingsBox.classList.toggle('open');
};

//  Colors => Change Colors
const changeColors = document.querySelectorAll('.colors-list li');

// Loop On All List Items
changeColors.forEach(li => {

	// Add Event (Click) To Li
	li.addEventListener('click', (e) =>{

	// Set The Color On The Root ( Main Color )
	document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

	// Set Color On Local Storage
	localStorage.setItem('color-option', e.target.dataset.color);

	// Use Handle Active Class Function
	handleActive(e);

	});

});

// Start Show Bullets

const bulletsContainer = document.querySelector('.nav-bullets');

const bulletsSpan = document.querySelectorAll('.bullets-option span');


bulletsSpan.forEach(span => {

	span.addEventListener('click', (e) => {

	if (span.dataset.display === 'block') {

		bulletsContainer.style.display = 'block';

		localStorage.setItem('bullets-option', 'block');

	} else {

		bulletsContainer.style.display = 'none';

		localStorage.setItem('bullets-option', 'none');
	}

		// Use Handle Active Class Function
		   handleActive(e);
	});
});

// Local Storage
let bulletLocalItem = localStorage.getItem('bullets-option');

if ( bulletLocalItem !== null ) {

	bulletsSpan.forEach(span => {

		span.classList.remove('active');
	}); 

	if ( bulletLocalItem == 'block' ) {

		bulletsContainer.style.display = 'block';

		document.querySelector('.bullets-option .yes').classList.add('active');

	} else {

		bulletsContainer.style.display = 'none';

		document.querySelector('.bullets-option .no').classList.add('active');
	}
}

// End Show Bullets

// Start Fixed Header

const headerPosition = document.querySelector('.the-header');
const headerSpan = document.querySelectorAll('.position-option span');

headerSpan.forEach(span => {
	
	span.addEventListener('click', (e) => {

		if ( span.dataset.position == 'fixed' ) {

			headerPosition.classList.add('fixed');

			localStorage.setItem('position-option', 'fixed');

		} else {

				headerPosition.classList.remove('fixed');

				localStorage.setItem('position-option', 'relative');
			}
		
		// Use Handle Active Class Function
			handleActive(e);
	});
});

//  Local Storage
let localHeader = localStorage.getItem('position-option');

if ( localHeader !== null ) {

	headerSpan.forEach(span => {

		span.classList.remove('active');
	});

	if ( localHeader == 'fixed' ) {

		headerPosition.classList.add('fixed');

		document.querySelector('.position-option .yes').classList.add('active');

	} else {

		headerPosition.classList.remove('fixed');

		document.querySelector('.position-option .no').classList.add('active');
	}
	
}

// End Fixed Header

// Start Reset Button

document.querySelector('.reset-options').onclick = function() {

	// localStorage.clear();
	localStorage.removeItem('color-option');
	localStorage.removeItem('bullets-option');
	localStorage.removeItem('position-option');

	// Reload window 
	window.location.reload();
}

	
// End Settings box


// Start Header

// Toggle Menu 
const toggleButton = document.querySelector('.toggle-menu');
const navLinks = document.querySelector('.links');

toggleButton.onclick = function(e) {

	// Stop Propagation
	e.stopPropagation();

	// Toggle Class menu-active On Button
	this.classList.toggle('menu-active');

	// Toggle Class open On links
	navLinks.classList.toggle('open');
}

// Click Anywhere Outside menu and toggle Button 
document.addEventListener('click', (e) => {

	if ( e.target !== toggleButton && e.target !== navLinks ) {

		// Check If menu is Open 
		if ( navLinks.classList.contains('open') ) {

			// Toggle Class menu-active On Button
			toggleButton.classList.toggle('menu-active');

			// Toggle Class open On links
			navLinks.classList.toggle('open');
		}
	}
})

// Stop Propagation On menu
navLinks.onclick = (e) => {
	e.stopPropagation();
}


// End Header

// Start Slider function

const myslide = document.querySelectorAll('.my-slide'),
	  dot = document.querySelectorAll('.dot');
	  
let dotCounter = 1;

// Create Timer function
let timer = setInterval(autoSlide, 5000);
function autoSlide() {
	dotCounter += 1;
	slidefun(dotCounter);
}

// Create plusSlides  function
function plusSlides(n) {
	dotCounter += n;
	slidefun(dotCounter);
	resetTimer();
}

// Create currentSlide Function
function currentSlide(n) {
	dotCounter = n;
	slidefun(dotCounter);
	resetTimer();
}

// Create resetTimer function
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 5000);
}

// Create slidefun function  ( The main function )
function slidefun(n) {
	
	let i;
	for(i = 0; i < myslide.length; i++){
		myslide[i].style.display = "none";
	}
	for(i = 0; i < dot.length; i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
		dotCounter = 1;
	   }
	if(n < 1){
		dotCounter = myslide.length;
	   }
	myslide[dotCounter - 1].style.display = "block";
	dot[dotCounter - 1].className += " active";
}

slidefun(dotCounter); // Call function ( slidefun )

// End Slider function

// Start Statistics

const	statistics = document.querySelector('.statistics');
const   progressSpans = document.querySelectorAll('.skill-progress span');

	window.onscroll = function () {

		// Skills Animate Width
		if ( window.scrollY >= statistics.offsetTop - 310 ) {
			progressSpans.forEach((span) => {
				span.style.width = span.dataset.progress;
			});
		}
	}

// End Statistics


// Start Gallery

const galleryImages = document.querySelectorAll('.gallery-images img');

galleryImages.forEach(img => {

	img.addEventListener('click', (e) => {

		// Create Overlay Element
		let overlay = document.createElement('div');

		// Add Class To Overlay
		overlay.className = 'popup-overlay';

		// Append Overlay To The Body
		document.body.appendChild(overlay);

		// Create Popup Box
		let popupBox = document.createElement('div');

		// Add Class To Popup Box
		popupBox.className = 'popup-box';

		// Add Heading To Img
		if ( img.alt !== null ) {

			// Create Heading
			let imgHeading = document.createElement('h3');

			// Create Text For Heading
			let imgText = document.createTextNode(img.alt);

			// Append The Text To The Heading 
			imgHeading.appendChild(imgText);

			// Append The Heading To The Popup Box
			popupBox.appendChild(imgHeading);

		};

		// Create The Image
		let popupImg = document.createElement('img');

		// Set Image Source
		popupImg.src = img.src;

		// Add Image To Popup Box
		popupBox.appendChild(popupImg);

		// Append Popup Box To The Body
		document.body.appendChild(popupBox);

		// Create The Close Span
		let closeButton = document.createElement('span');

		// Create Text To Close Button
		closeButton.textContent = 'X';

		// Add Class To Close Button
		closeButton.className = 'close-button';

		// Add Close Button To The Popup Box
		popupBox.appendChild(closeButton);

		// Close Popup and Overlay
		closeButton.addEventListener('click', function(e){

			// Remove The Current Popup
			e.target.parentNode.remove();

			// Remove The Overlay (Another Way)
			document.querySelector('.popup-overlay').remove();
		});

		// Another Way
	// 	document.addEventListener('click', function(e) {

	// 		if ( e.target.className == 'close-button' ){

	// 			// Remove The Current Popup
	// 			e.target.parentNode.remove();

	// 			// Remove The Overlay (Another Way)
	// 			document.querySelector('.popup-overlay').remove();

	// 		}
	// 	});


	// Close PopupBox and Overlay When clicked On anywhere

	document.addEventListener('click', function(e) {
	if (e.target.className == 'popup-overlay'){
      
		// Remove Overlay
		document.querySelector('.popup-overlay').remove();
	   
	   // Remove popup Box
	   document.querySelector('.popup-box').remove();
 
   }
});

//  Another Way

// document.addEventListener('click', function(e) {
// 	if (e.target.className == 'popup-overlay'){    
// 		e.target.nextSibling.remove();
// 		e.target.remove(); 
// 	   }
// });

	
	});
});


// End Gallery