const preloader = document.querySelector('.preloader');
const btn = document.querySelector('.btn');
const video = document.getElementById('video');

// preloader
window.onload = function() {
    document.querySelector('.preloader').style.display = "none";
};

btn.addEventListener('click', function(){
    if(!video.paused) {
        // console.log('it paused');
        video.pause();
        btn.classList.add('paused');
    } else {
        // console.log('its playing');
        video.play();
        btn.classList.remove('paused');
    };
});