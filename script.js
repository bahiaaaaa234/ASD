
function clickey(id) {
    console.log(id)
    switch (id) {
        case 'BlackFlag':
            window.open("youtube.com")
            break;
        case 'Valhalla':
            window.open("./valhalla/AssV.html")
            break
        case 'Odyssey':
            window.open("./Odyssey/AssIV.html")
            break
        case 'Origins':
            window.open("./Origins/AssIII.html")
            break
        default:
            break;
    }
}
