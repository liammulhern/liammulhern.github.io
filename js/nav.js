let navEnterButton = document.getElementById('nav-mobile-menu'),
    nav = document.getElementById('nav-bar'),
    navExitButton = document.getElementById('nav-mobile-exit'),
    navContentButton = document.getElementById('nav-mobile-content'),
    navDesktop = document.querySelector('.nav-desktop'),
    navMobile = document.querySelector('.nav-mobile-header'),
    home = document.getElementById('home');

navEnterButton.addEventListener('click', () => {
    nav.classList.add('menu-open');
    navEnterButton.classList.add('menu-open');
    navExitButton.classList.add('menu-open');
})

navExitButton.addEventListener('click', () => {
    nav.classList.remove('menu-open');
    navEnterButton.classList.remove('menu-open');
    navExitButton.classList.remove('menu-open');
})

navContentButton.addEventListener('click', () => {
    nav.classList.remove('menu-open');
    navEnterButton.classList.remove('menu-open');
    navExitButton.classList.remove('menu-open');
})

document.addEventListener('scroll', e => {
    if(window.pageYOffset > home.clientHeight){
        nav.style.top = "0";
    }
    else if(window.pageYOffset < home.clientHeight){
        nav.style.top = "-80px";
        nav.classList.remove('menu-open');
        navEnterButton.classList.remove('menu-open');
        navExitButton.classList.remove('menu-open');
    }
})

document.addEventListener('mousemove', e => {
    if(e.clientY < 80){
        nav.style.top = "0";
    }
    else if(window.pageYOffset < home.clientHeight && e.clientY > 80 && !nav.classList.contains(menu-open)){
        nav.style.top = "-80px";
        nav.classList.remove('menu-open');
        navEnterButton.classList.remove('menu-open');
        navExitButton.classList.remove('menu-open');
    }
})
