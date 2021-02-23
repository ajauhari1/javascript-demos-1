// Enter JavaScript for the exercise here...
document.querySelector('[name=toggle]').addEventListener('change', function (evt) {
    console.log('toggle change...');

    let checks = document.querySelectorAll('[name=message]');
    console.log(checks);
    // declare idx variable to track current index of element we want to inspect in the list
    let idx = 0;

    // While loop is used to check how many elements are in the list, as long as current index (variable idx) is less than number of elements in the list
    while (idx < checks.length) {

        // use if/else to see if the toggle checkbox has been checked or not
        if (evt.target.checked) {
            checks[idx].checked = true;
        } else {
            checks[idx].checked = false;
        }

        // lastly increment index to ensure we look at all elements in the list and its not endless loop
        idx = idx + 1;
    }
});