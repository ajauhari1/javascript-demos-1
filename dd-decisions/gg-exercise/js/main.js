var featureLink = document.querySelector('a.feature');
featureLink.addEventListener('click', featureLinkHandler);
function featureLinkHandler(evt) {
    var featureImage = document.querySelector('img.feature');
    //if(featureImage.classList.contains('hidden') === true){}
    if(featureImage.classList.contains('hidden')) {
        featureImage.src = featureLink.href;
        featureImage.classList.remove('hidden');
        featureLink.innerHTML = 'Hide Barcelona';
    } else {
        featureImage.src = '';
        featureImage.classList.add('hidden');
        featureLink.innerHTML = 'View Barcelona';
    }
    evt.preventDefault();
}