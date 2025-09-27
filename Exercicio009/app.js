function fnRepetirFrase(){
    let qtd = 0, frase = "", contador = 0 //crie as variaveis
    frase = document.getElementById("frase").value // document.getElementByid (*).value adiciona dados as variaveis em formato texto
    qtd = document.getElementById("qtd").value //  document.getElementByid (*).value adiciona dados as variaveis em formato texto
    document.getElementById("lista_frases").innerHTML = "" //innerHTML insere os dados no local, neste caso ele vai limpar o que esta sendo gravado na lista na parte abaixo += "<li>" + frase + "</li>"
    while(contador < qtd ){ // while laço de repetição ( "parenteses"condição caso verdadeira)
        document.getElementById("lista_frases").innerHTML += "<li>" + frase + "</li>" 
        contador++
    }
    
}