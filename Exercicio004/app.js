function fnValidarIdadeCNH(){
    const verificarIdade = document.getElementById('input_idade').value
    const nomeUsuario = document.getElementById('input_nome').value

    if(verificarIdade >= 18){
        alert(nomeUsuario + " Você Pode tirar a CNH")
    }else{
        alert(nomeUsuario + " Você ainda não pode dirigir por motivo da sua idade")
    }
}