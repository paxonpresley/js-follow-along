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
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    // console.log(linksHeight);
    // * how this works: WHEN THE TOGGLE IS CLICKED the const's grab the height of the parent and the child elements from the html, then we check if the height is 0, if so then give it enough height, if it's been given height then take away that height.
    // didnt know this but !important can override inline txt but inline txt can override general css
    if(containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});


// ********** fixed navbar ************
// todo: when you scroll past the height of the nav it pops up smoothly at the top. 1. add an eventListener set to scroll. 2. add function that when the page is scrolled so far you add a classList of '.fixed-nav' to the correct element. 3. now you want another function that at a certain scroll point you want to show the back to top btn.
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
window.addEventListener('scroll', function() {
    // console.log(window.pageYOffset);
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }
    // this is the if else function that we needed in step 3
    if (scrollHeight > 1000) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }
});


// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('scroll-link');
scrollLinks.forEach(function(link) { // 'link' is a param that you can access through the function
    link.addEventListener('click', function(e){
        // preventDefault means it stops the original functionality so you can program your own functionality
        e.preventDefault();
        // navigate to a certain spot
        const id = e.currentTarget.getAttribute('href').slice(1);
        console.log(id); // target the var in the console not the href js
        const element = document.getElementById(id);
        // calculate the heights
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const navHeight = links.getBoundingClientRect().height;
        const fixedNav = links.classList.contains('fixed-nav')
        let position = element.offsetTop - navHeight;
        // console.log(position);
        if(!fixedNav){
            position = position - navHeight;
        } if (navHeight > 82){
            position = position + containerHeight;
        }
        window.scrollTo({
            left: 0,
            top: position,
        })
        linksContainer.style.height = 0;
    });
});