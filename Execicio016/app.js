let resultadoFinal = 0
const labelResultado = document.getElementById("valorFinal")
labelResultado.style.color = "green"

function fnVerificarCalculo() {
    const calculo = document.getElementById("tipoAcao").value
    const valorConta = parseFloat(document.getElementById("valorConta").value)
    const valorPorcentagem = parseFloat(document.getElementById("porcentagem").value)
    const calculoPorcentagem = valorPorcentagem / 100


    if (calculo == "acrescimo") {
        fnAcrescimo(valorConta, calculoPorcentagem)

    } else if (calculo == "desconto") {
        fnDesconto(valorConta, calculoPorcentagem)
    } else {
        alert("Escolha uma ação")
    }
}

function fnAcrescimo(valor, porcentagem) {
    resultadoFinal = valor + (valor * porcentagem)
    labelResultado.innerText = "R$" + resultadoFinal
}

function fnDesconto(valor, porcentagem) {
    resultadoFinal = valor - (valor * porcentagem)
    labelResultado.innerText = "R$" + resultadoFinal
}

const botao = document.getElementById("btnCalcular")
botao.addEventListener('click', () => {
    fnVerificarCalculo()
})