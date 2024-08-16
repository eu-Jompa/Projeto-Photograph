const hambuguer = document.querySelector('.hamburguer');
const nav = document.querySelector(".navbar");
const closeNav = document.querySelector('.close');

hambuguer.addEventListener('click',openMenu);
closeNav.addEventListener('click', closeMenu);

function openMenu(){
    nav.classList.add("abrir-nav");
}
function closeMenu(){
    nav.classList.remove("abrir-nav");
}