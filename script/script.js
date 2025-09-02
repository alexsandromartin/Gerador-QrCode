const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#qr-form button")
const qrCodeInput = document.querySelector("#qr-form input")
const qrCodeImg = document.querySelector("#qr-code img")

//Eventos

//Gerar Qr Code
function generateQRCode() {
    const qrCodeInputValue = qrCodeInput.value

    if(!qrCodeInputValue) return; //se o input estiver vazio, não faz nada
    qrCodeBtn.innerText = "Gerando Qr Code..."

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

    qrCodeImg.addEventListener("load", () => { //quando a imagem carregar
        container.classList.add("active") //adiciona a classe active ao container
        qrCodeBtn.innerText = "Qr code gerado!"
    }) 
}

qrCodeBtn.addEventListener("click", () => {
    generateQRCode()
})

qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter") { //se a tecla pressionada for Enter
        generateQRCode()
    }
})

//Limpar área do Qr Code
qrCodeInput.addEventListener("keyup", () => {
    if(!qrCodeInput.value) { //se o input estiver vazio
        container.classList.remove("active") //remove a classe active do container
        qrCodeImg.src = "" //limpa a imagem do Qr Code
        qrCodeBtn.innerText = "Gerar Qr Code"
    }
})
