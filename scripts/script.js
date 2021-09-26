/* ESSE SCRIPT TEM A FUNÇÃO DE ATIVAR/DESATIVAR O MENU MOBILE COM O CLICK DO USUÁRIO.
ELE ATIVA/DESATIVA COM O CLICK DO USUÁRIO NO BOTÃO HAMBURGUER, DESATIVA COM O CLICK EM UM DOS LINKS
DO MENU NAV OU COM O CLICK FORA DO MENU NAV (COM ELE ABERTO)*/

const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(){
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
    const botoes = document.getElementById('botoes')
    botoes.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)
nav.addEventListener('click', toggleMenu)
