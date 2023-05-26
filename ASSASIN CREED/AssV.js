var playButton = document.querySelector('.play');
var closeButton = document.querySelector('.close');
var trailer = document.querySelector('.trailer');
var video = document.querySelector('.trailer video');

playButton.addEventListener('click', function(event) {
    event.preventDefault();
    trailer.classList.add('active');
    video.play();
});

closeButton.addEventListener('click', function(event) {
    event.preventDefault();
    trailer.classList.remove('active');
    video.pause();
    video.currentTime = 0;
});

window.addEventListener('click', function(event) {
    if (event.target === trailer) {
        trailer.classList.remove('active');
        video.pause();
        video.currentTime = 0;
    }
});
