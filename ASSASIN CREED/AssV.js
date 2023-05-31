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
function toggleVideo() {
    var trailer = document.getElementById('trailer');
    trailer.classList.toggle('active');
}
    function checkScroll() {
        var elements = document.querySelectorAll('.scroll-transition img');
        var windowHeight = window.innerHeight;

        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var positionFromTop = elements[i].getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 0) {
                element.classList.add('visible');
                element.style.animationDelay = i * 0.2 + 's'; // Adicione um atraso progressivo
            }
        }
    }

    function debounce(func, wait = 10, immediate = true) {
        var timeout;
        return function () {
            var context = this,
                args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    window.addEventListener('scroll', debounce(checkScroll));

    // Chame checkScroll uma vez para verificar se as imagens já estão visíveis na página
    checkScroll();