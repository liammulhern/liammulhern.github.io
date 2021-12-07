let prevScrollpos = window.pageYOffset
    nav = document.getElementById('nav-bar')
    navExit = document.getElementById('nav-mobile-exit')
    home = document.getElementById('home');
    navHeight = 95
    navScroll = false
    navScrolled = false;

window.addEventListener("mousemove", (e) => {


    if(navScrolled){
        if(e.clientY < navHeight){
        nav.style.top = "0";
        navScroll = false;
    }
    else if(e.clientY > nav.clientHeight && (navExit.currentStlye ? navExit.currentStlye : getComputedStyle(navExit,null).display) === 'block' && !navScroll && navScrolled) {
        nav.style.top = "-" + navHeight + "px";
        nav.classList.remove('menu-open');
        navEnterButton.classList.remove('menu-open');
        navExitButton.classList.remove('menu-open');
    }
    else if(e.clientY > navHeight && !((navExit.currentStlye ? navExit.currentStlye : getComputedStyle(navExit,null).display) === 'block') && !navScroll && navScrolled){
        nav.style.top = "-" + navHeight + "px";
    }
    }
})

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if(currentScrollPos > (home.clientHeight - 10)){
        navScrolled = true;
        nav.style.top = "0";
    }
    else{
        navScrolled = false;
    }


    if (prevScrollpos > currentScrollPos) {
        nav.style.top = "0";
        navScroll = true;
    } 
    else if(navScrolled){
        nav.style.top = "-" + navHeight + "px";
        navScroll = false;
        nav.classList.remove('menu-open');
        navEnterButton.classList.remove('menu-open');
        navExitButton.classList.remove('menu-open');
    }

    prevScrollpos = currentScrollPos;
} 