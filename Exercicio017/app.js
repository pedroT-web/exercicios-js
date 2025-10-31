let filmes = []

function fnSalvar() {
    const nome_filme = document.getElementById("nomeFilme").value
    const foto_capa = document.getElementById("fotoCapa").value
    const ano_filme = document.getElementById("ano").value
    const avaliacao_filme = document.getElementById("avaliacao").value
    const trailer_filme = document.getElementById("trailer").value
    const genero_filme = document.getElementById("genero").value
    const duracao_filme = document.getElementById("duracao").value
    const descricao_filme = document.getElementById("descricao").value

    let umFilme = {
        nome: nome_filme,
        foto: foto_capa,
        ano: ano_filme,
        avaliacao: avaliacao_filme,
        trailer: trailer_filme,
        genero: genero_filme,
        duracao: duracao_filme,
        descricao: descricao_filme
    }

    filmes.push(umFilme)

    fnListar()
}

function fnListar() {
    let filmesSalvos = ""

    filmes.forEach((umFilme, indice) => {
        filmesSalvos += `
        <div class="card mt-5 ms-5" style="max-width: 500px;">
            <img src="${umFilme.foto}" class="card-img-top imagens img-fluid mt-3 object-fit-cover">
            <div class="card-body">
                <h1 class="card-title">${umFilme.nome}</h1>
                <label class="card-title fs-4">${umFilme.ano} | ${umFilme.avaliacao} | ${umFilme.genero} | ${umFilme.duracao}</label>
                <p class="card-title">${umFilme.descricao}</p>
                <div class="text-end">
                    <a type="button" href="${umFilme.trailer}" class="btn btn-success" target="_blank">Assistir Trailer</a>
                    <button type="button" onclick="fnDeletar(${indice})" class="btn btn-danger">Deletar</button>
                </div>
            </div>
        </div>
        `


    })

    document.getElementById("listaDeContatos").innerHTML = filmesSalvos
}

function fnDeletar(i) {
    filmes.splice(i, 1)
    console.dir(filmes)
    fnListar();
}

const botao = document.getElementById("botaoSalvar")

botao.addEventListener("click", () => {
    fnSalvar();
})