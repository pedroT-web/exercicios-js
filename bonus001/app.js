function fnTocarSom(tecla) {
    if (tecla == 65) {
        document.getElementById('som-65').curretTime = 0 //-> resetar a musica.
        document.getElementById('som-65').play()
    } else if (tecla == 66) {
        document.getElementById('som-66').curretTime = 0 //-> resetar a musica.
        document.getElementById('som-66').play()
    }
    else if (tecla == 83) {
        document.getElementById('som-83').curretTime = 0 //-> resetar a musica.
        document.getElementById('som-83').play()
    }
    else if (tecla == 70) {
        document.getElementById('som-70').curretTime = 0 //-> resetar a musica.
        document.getElementById('som-70').play()
    }
}