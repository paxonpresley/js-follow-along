// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
// ur looking for 3 different elements, the toggle btn, the links, and links container
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
// by default the links container is hidden, you need to create a fundtion that shows them when the btn is clicked
navToggle.addEventListener("click", function() {
    // linksContainer.classList.toggle('.show-links'); not good if you need a dynamic nav bar
});

// ********** fixed navbar ************

// ********** smooth scroll ************
// select links