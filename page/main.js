const texto = document.querySelector(".opcoes-texto")

function remove() {
    if (window.innerWidth < 530) {
        texto.textContent = "para fazer o download"
    } else {
        texto.textContent = "para fazer o download ou ultilize o QRcode ao lado"
    }
}
window.addEventListener('resize', remove, false)