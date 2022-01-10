const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {    
    cursor.style.left= e.clientX + 'px';
    cursor.style.top= e.clientY + 'px';

    if(e.target.classList != undefined){
        if(e.target.classList.contains('interactable')){
            cursor.style.transform = "scale(7)";
        }
        else{
            cursor.style.transform = "scale(1)";
        }
    }
});
