$('#image_id').click(function() {
    $(".frameVideo").attr('src', $(".frameVideo").attr('src') + '?autoplay=1');
});

function clickey(id) {
    console.log(id)
    switch (id) {
        case 'BlackFlag':
        window.open("youtube.com")
            break;
        case 'Valhalla':
            window.open("./AssV.html")
            break
        default:
            break;
    }
}
