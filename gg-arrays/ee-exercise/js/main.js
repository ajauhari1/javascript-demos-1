// your js here...
let images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
let currentImg = 0;

document.querySelector('.carousel img').src = 'images/' + images[0];

document.querySelector('.carousel').addEventListener('click', function (evt) {

    if (evt.target.classList.contains('control')) {
        console.log('control clicked...')

        if (evt.target.classList.contains('next')) {
            // move to next index in images array
            currentImg += 1;
            if (currentImg >= images.length) // if its greater then the max array length
            {
                currentImg = images.length - currentImg; // make current image
            }
        } else if (evt.target.classList.contains('prev')) {
            // move to previous index in array
            currentImg -= 1;
            if (currentImg < 0)
            {
                currentImg = images.length + currentImg;
            }
        }

        // display the new current image
        document.querySelector('.carousel img').src = 'images/' + images[currentImg];
    }
});