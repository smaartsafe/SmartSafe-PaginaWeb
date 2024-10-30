const texto = document.querySelector(".opcoes-texto")
const buttonMenu = document.querySelector(".cabecalho-menu-icon")
const menuMobile = document.querySelector(".cabecalho-menu-mobile")
const home = document.querySelector("#home")
const menuItens = document.querySelector(".cabecalho-menu-mobile")
const itens = document.querySelectorAll(".menu-mobile")

function remove() {
    if (window.innerWidth < 530) {
        texto.textContent = "para fazer o download"
    } else {
        texto.textContent = "para fazer o download ou ultilize o QRcode ao lado"
    }
}
window.addEventListener('resize', remove, false)

buttonMenu.addEventListener('click', (e) => {
    e.preventDefault()
    menuMobile.classList.toggle('menu-show')
})

menuItens.addEventListener('click', (e) => {
    menuMobile.classList.toggle('menu-show')
})

