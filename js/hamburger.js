const menu = document.querySelector("#nav .right");
const hamburger_menu = document.querySelector('#nav .ham');
const close_menu = document.querySelector('#nav .close');

hamburger_menu.addEventListener('click',()=>{
    menu.classList.toggle('slide');
})

close_menu.addEventListener('click',()=>{
    menu.classList.remove('slide');
})