function fnVerificarPeriodo(){
    let periodoSelecionado = document.getElementById("periodo").value

    // document.getElementById("resposta").innerText = periodoSelecionado
    document.body.style.transition = "0.5s"

    if(periodoSelecionado == "m"){
        document.getElementById("resposta").innerText = " Manhã ☀️"
        document.body.style.backgroundColor = "#3ca6ec"
        document.getElementById("foto").src="img/dia.webp"
    }else if(periodoSelecionado == "t"){
        document.getElementById("resposta").innerText = " Tarde 🌥️"
        document.body.style.backgroundColor = "#ec8208"
        document.getElementById("foto").src="img/tarde.gif"
    }else if(periodoSelecionado == "n"){
        document.getElementById("resposta").innerText = " Noite 🌑"
        document.body.style.backgroundColor = "#09026e"
        document.getElementById("foto").src="img/noite.gif"
    }else{
        document.getElementById("resposta").innerText = ""
        document.body.style.backgroundColor = "#de62ee"
        document.getElementById("foto").src="img/original.png"
    }

}