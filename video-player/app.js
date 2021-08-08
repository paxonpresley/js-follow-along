const preloader = document.querySelector('.preloader');
const btn = document.querySelector('.btn');
const video = document.getElementById('.video');

// preloader
window.onload = function() {
    document.querySelector('.preloader').style.display = "none";
};

btn.addEventListener('click', function(){
    if(!video.paused) {
        video.pause();
    } else {
        video.play();
    };
});