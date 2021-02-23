//When a gallery thumbnail size button is clicked, 
//the corresponding size class
//should be added to the div.thumbnails element.
//This will apply the corresponding CSS rule to  
//modify the display the of the thumbnail images.
//In addition to this, the clicked button should be 
//made active (i.e. add the active class).

document.querySelector('ul.thumbnail-sizes').addEventListener('click', thumbnailSizeHandler);

function thumbnailSizeHandler(evt) {
	var thumbnails = document.querySelector('div.thumbnails');
	if (!evt.target.classList.contains('active')) {
		// update the active li
		document.querySelector('li.active').classList.remove('active');
		evt.target.classList.add('active');
		if (evt.target.classList.contains('thumbnails-sm')) {
			thumbnails.classList.remove('md');
			thumbnails.classList.remove('lg');
			thumbnails.classList.add('sm');
		} else if (evt.target.classList.contains('thumbnails-md')) {
			thumbnails.classList.remove('sm');
			thumbnails.classList.remove('lg');
			thumbnails.classList.add('md');
		} else {
			thumbnails.classList.remove('sm');
			thumbnails.classList.remove('md');
			thumbnails.classList.add('lg');
		}
	}
}

// document.querySelector('ul.thumbnail-sizes').addEventListener('click', thumSize);

// function thumSize(evt) {
// 	var thumbSelec = document.querySelector('div.thumbnails');
// 	if (!evt.target.classList.contains('active')) {

// 		document.querySelector('li.active').classList.remove('active');
// 		evt.target.classList.add('active');
// 		if (evt.target.classList.contains('thumbnails-sm')) {
// 			thumbSelec.classList.remove('md');
// 			thumbSelec.classList.remove('lg');
// 			thumbSelec.classList.add('sm');
// 		} else if (evt.target.classList.contains('thumbnails-md')) {
// 			thumbSelec.classList.remove('sm');
// 			thumbSelec.classList.remove('lg');
// 			thumbSelec.classList.add('md');
// 		} else {
// 			thumbSelec.classList.remove('sm');
// 			thumbSelec.classList.remove('md');
// 			thumbSelec.classList.add('lg')
// 		}
// 	}

// }