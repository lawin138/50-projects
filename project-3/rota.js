const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

open.addEventListener('click', ()=>
    container.classList.add('show-nav'))/* 兩亇arrow-function */

close.addEventListener('click', ()=>
    container.classList.remove('show-nav'))
