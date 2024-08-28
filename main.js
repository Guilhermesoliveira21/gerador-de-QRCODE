const input = document.getElementById("input");
const code = document.getElementById("code");
const botao = document.getElementById("botao")

botao.addEventListener("click", () => {

    let inputURL = input.value;

    if(!inputURL) {
        alert("Insira uma URL para ou texto para gerar um Qr Code")
        return
    }

    botao.innerText = "Gerando QR CODE..."

    code.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${inputURL}`
    code.addEventListener("load", () => {
        botao.innerText = "Gerar QR CODE"

        code.classList.add("active")
    })
})

botao.addEventListener("keyup", () => {


    if(!input.value) {
        code.classList.remove("active")
        window.location.reload()
    }
})
