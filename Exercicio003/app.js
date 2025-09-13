function fnCalcularMedia(){
    let vendedor = "", janeiro = 0, fevereiro = 0, marco = 0, media = 0

    vendedor = document.getElementById("vendedor").value
    alert("Seja Bem Vindo(a) " + vendedor)

    janeiro = document.getElementById("janeiro").value
    fevereiro = document.getElementById("fevereiro").value // document.getElementById("fevereiro").value --> estrutura para pegar o valor do input pelo seu id
    marco = document.getElementById("marco").value 

    media = (parseFloat(janeiro) + parseFloat(fevereiro) + parseFloat(marco))/3 // parseFloat, recebe um texto e transforma em um numero float, todos os dados de entrada vem com texto, tendo que ser transformada em numero


    document.getElementById("media").innerText = media.toFixed(2) // toFixed(2) trata a entrada do float para receber até duas casas decimais
}