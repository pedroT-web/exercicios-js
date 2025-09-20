let dataAtual = new Date()
let diaSemana = dataAtual.getDay()
if(diaSemana == 0){
    document.getElementById("resposta").innetText = "Domingo"
}else if(diaSemana == 1){
    document.getElementById("resposta").innerText = "Segunda-Feira"
}else if(diaSemana == 2){
    document.getElementById("resposta").innerText = "Terça-Feira"
}else if(diaSemana == 3){
    document.getElementById("resposta").innerText = "Quarta-Feira"
}else if(diaSemana == 4){
    document.getElementById("resposta").innerText = "Quinta-Feira"
}else if(diaSemana == 5){
    document.getElementById("resposta").innerText = "Sexta-Feira"
}else if(diaSemana == 6){
    document.getElementById("resposta").innerText = "Sábado"
}