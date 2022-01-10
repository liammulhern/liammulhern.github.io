let hobbies = document.getElementById('hobbies'),
    artView = document.querySelector('.hobbies-art .viewport'),
    artContent = document.querySelector('.hobbies-art .scrollable-content'),
    photoView =  document.querySelector('.hobbies-photography .viewport'),
    photoContent = document.querySelector('.hobbies-photography .scrollable-content');

new ScrollBooster({
    viewport: photoView,
    content: photoContent,
    bounce: true,
    textSelection: false,
    // emulateScroll: true,
    scrollMode: 'native',
    direction: 'horizontal',

});

new ScrollBooster({
    viewport: artView,
    content: artContent,
    bounce: true,
    textSelection: false,
    //emulateScroll: true,
    scrollMode: 'native',
    direction: 'horizontal',
});