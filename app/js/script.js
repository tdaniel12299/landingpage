const btnMenu = document.querySelector('#btnMenu');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

btnMenu.addEventListener('click',function(){
    console.log("open");

    if(header.classList.contains('open')) { //close menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
        

    }else { //open menu
        body.classList.add('noscroll');
        header.classList.add('open');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
        
        
    }
})
