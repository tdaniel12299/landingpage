const btnMenu = document.querySelector('#btnMenu');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');


btnMenu.addEventListener('click',function(){
    console.log("open");

    if(header.classList.contains('open')) { //close menu
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');

    }else { //open menu
        header.classList.add('open');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
    }
})