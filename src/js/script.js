const { send } = require("express/lib/response");

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

function sendEmail(){
    var params = {
        from_name:document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_rskkytc","template_crzq60r",params).then(function(res){alert("mensagem enviada com sucesso"+ res.status)});
};