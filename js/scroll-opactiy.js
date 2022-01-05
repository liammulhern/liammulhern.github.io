const opacityElementsIntro = document.querySelectorAll('.intro-opacity-scroll'),
    opacityElementsOutro = document.querySelectorAll('.outro-opacity-scroll'),
    defaultScrollDelay = 0,
    defaultScrollSpeed = 1;
    
    

window.onscroll = function () {

    opacityElementsOutro.forEach(element => {
        var windowHeight = window.innerHeight,
            scrollBottom = element.getBoundingClientRect().bottom,
            scrollDelay = (!isNaN(parseFloat(element.getAttribute('data-delay'))) ? parseFloat(element.getAttribute('data-delay'))/100.0 : defaultScrollDelay),
            scrollSpeed = (!isNaN(parseFloat(element.getAttribute('data-speed'))) ? parseFloat(element.getAttribute('data-speed')) : defaultScrollSpeed),
            opacity = scrollSpeed * (windowHeight - (scrollBottom + (scrollDelay*windowHeight)))/windowHeight;

        element.style.opacity = 1 - opacity;
    });

    opacityElementsIntro.forEach(element => {
        var windowHeight = window.innerHeight,
            scrollTop = element.getBoundingClientRect().top,
            scrollDelay = (!isNaN(parseFloat(element.getAttribute('data-delay'))) ? parseFloat(element.getAttribute('data-delay'))/100.0 : defaultScrollDelay),
            scrollSpeed = (!isNaN(parseFloat(element.getAttribute('data-speed'))) ? parseFloat(element.getAttribute('data-speed')) : defaultScrollSpeed),
            opacity = scrollSpeed * (windowHeight - (scrollTop + (scrollDelay*windowHeight)))/(windowHeight);

        element.style.opacity = opacity;
    });
}

