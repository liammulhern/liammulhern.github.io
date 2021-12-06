let prevScrollpos = window.pageYOffset
    nav = document.getElementById("nav-bar")
    navExit = document.getElementById('nav-mobile-exit')
    navHeight = 95
    navScroll = false
    navScrolled = false;

window.addEventListener("mousemove", (e) => {
    if(navScrolled){
        if(e.clientY < navHeight){
        nav.style.top = "0";
        navScroll = false;
    }
    else if(e.clientY > nav.clientHeight && (navExit.currentStlye ? navExit.currentStlye : getComputedStyle(navExit,null).display) === 'block' && !navScroll) {
        nav.style.top = "-" + navHeight + "px";
        nav.classList.remove('menu-open');
        navEnterButton.classList.remove('menu-open');
        navExitButton.classList.remove('menu-open');
    }
    else if(e.clientY > navHeight && !((navExit.currentStlye ? navExit.currentStlye : getComputedStyle(navExit,null).display) === 'block') && !navScroll){
        nav.style.top = "-" + navHeight + "px";
    }
    }
})

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    navScrolled = true;

    if (prevScrollpos > currentScrollPos) {
        nav.style.top = "0";
        navScroll = true;
    } 
    else {
        nav.style.top = "-" + navHeight + "px";
        navScroll = false;
        nav.classList.remove('menu-open');
        navEnterButton.classList.remove('menu-open');
        navExitButton.classList.remove('menu-open');
    }

    prevScrollpos = currentScrollPos;
} 