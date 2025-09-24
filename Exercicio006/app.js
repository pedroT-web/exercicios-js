function fnCalcularSaldoDeHoras(){
    let nome = document.getElementById("nome").value
    let ch_semanal = document.getElementById("ch_semanal").value
    let ch_trabalhada = document.getElementById("ch_trabalhada").value
    let saldo = 0

    saldo = ch_trabalhada - ch_semanal

    if(saldo < 0){
        document.getElementById("saldo").innerText = saldo + "Parabéns 👌"
    }else{
        document.getElementById("saldo").innerText = saldo + "Está devendo horas 😥"
    }
}