let navEnterButton = document.getElementById('nav-mobile-menu')
    nav = document.getElementById('nav-bar')
    navExitButton = document.getElementById('nav-mobile-exit')
    navContentButton = document.getElementById('nav-mobile-content');

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