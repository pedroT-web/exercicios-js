// // const -> define uma variável constante, onde não poderá alterar seu valor
// const teste = "";
// // let --> é utilizada apenas no arquivo que foi declarada, seria um escopo, ela é meio que "Privada" naquele arquivo
// let teste1 = "";
// // var --> ela é global, todos os meus arquivos conseguem ver ela, sendo menos utilizadas, ela não tem um "escopo"
// var teste2 = "";

let nome = "", idade = 0
// prompt --> serve para entrada de dados, mas usado para uso pedagógico
nome = prompt("Informe seu nome: ")
idade = prompt("Inforem a sua idade: ")

alert("Olá, seja Bem Vindo(a) " + nome + "\nVocê tem " + idade + " anos")

// Escreve o valor das variaveis no documento, na tela do navegador 
document.write("Olá, seja Bem Vindo(a) " + nome + "<br>Você tem " + idade + " anos")

