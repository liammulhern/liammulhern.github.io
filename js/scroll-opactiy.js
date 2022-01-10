const opacityElementsIntro = document.querySelectorAll('.intro-opacity-scroll'),
    opacityElementsOutro = document.querySelectorAll('.outro-opacity-scroll'),
    defaultScrollOpacityDelay = 0,
    defaultScrollOpacitySpeed = 1;
    
// window.onload = function () {
//     opacityElementsOutro.forEach(element => {
//         element.setAttribute("style", "transition: opacity 0.1s ease;");
//     });
//     opacityElementsIntro.forEach(element => {
//         element.setAttribute("style", "transition: opacity 0.1s ease;");
//     });
// }

window.onscroll = function () {

    opacityElementsOutro.forEach(element => {
        var windowHeight = window.innerHeight,
            scrollBottom = element.getBoundingClientRect().bottom,
            scrollDelay = (!isNaN(parseFloat(element.getAttribute('data-opacityDelay'))) ? parseFloat(element.getAttribute('data-opacityDelay'))/100.0 : defaultScrollOpacityDelay),
            scrollSpeed = (!isNaN(parseFloat(element.getAttribute('data-opacitySpeed'))) ? parseFloat(element.getAttribute('data-opacitySpeed')) : defaultScrollOpacitySpeed),
            opacity = scrollSpeed * (windowHeight - (scrollBottom + (scrollDelay*windowHeight)))/windowHeight;
            
            opacity = 1 - Math.max(0, Math.min(opacity, 1));

        element.style.opacity = opacity;
    });

    opacityElementsIntro.forEach(element => {
        var windowHeight = window.innerHeight,
            scrollTop = element.getBoundingClientRect().top,
            scrollDelay = (!isNaN(parseFloat(element.getAttribute('data-opacityDelay'))) ? parseFloat(element.getAttribute('data-opacityDelay'))/100.0 : defaultScrollOpacityDelay),
            scrollSpeed = (!isNaN(parseFloat(element.getAttribute('data-opacitySpeed'))) ? parseFloat(element.getAttribute('data-opacitySpeed')) : defaultScrollOpacitySpeed),
            opacity = scrollSpeed * (windowHeight - (scrollTop + (scrollDelay*windowHeight)))/(windowHeight);

            opacity = Math.max(0, Math.min(opacity, 1));
        element.style.opacity = opacity;
    });
}

