let contatos = []

function fnSalvar() {
    console.log(document.getElementById("nome").value)

    let umContato = {
        nome: document.getElementById("nome").value,
        telefone: document.getElementById("telefone").value,
        email: document.getElementById("email").value,
        foto: document.getElementById("foto").value
    }

    contatos.push(umContato);
    // console.dir(contatos)

    fnListar()
}

function fnListar() {
    let dados = ""

    contatos.forEach(function (umContato, i) {
        dados += `
        <div class="card mt-5 ms-5" style="max-width: 500px;">
            <img src="${umContato.foto}" class="card-img-top imagens img-fluid mt-3 object-fit-cover">
            <div class="card-body">
                <p class="card-title">Nome: ${umContato.nome}</p>
                <p class="card-title">Telefone: ${umContato.telefone} </p>
                <p class="card-title">E-mail: ${umContato.email}</p>
                <div class="text-end">
                <button type="button" onclick="fnExcluir(${i})" class="btn btn-danger">Deletar</button>
                </div>
            </div>
        </div>        
        `
    })

    document.getElementById("listaDeContatos").innerHTML = dados
}

function fnExcluir(indice) {
    contatos.splice(indice, 1)
    fnListar()

}

function fnLimpar() {
    document.getElementById("formulario").reset()
}

//  addEventListener --> vai estar ouvindo o evento que acontece
document.getElementById("btnSalvar").addEventListener('click', function () {
    fnSalvar()
    fnLimpar()
})