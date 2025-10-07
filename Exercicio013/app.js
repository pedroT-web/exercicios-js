let numeroDeVagas = []
let veiculos = []

function fnSalvarVeiculo() {
    numeroDeVagas.push(document.getElementById("numero_vaga").value)
    veiculos.push(document.getElementById("veiculo").value)
}

function fnListarVeiculos() {
    // console.dir(numeroDeVagas)
    // console.dir(veiculos)

    // let i = 0;

    // while (i < veiculos.length) {

    // }

    // for(declaração do contador; condição; incremento){}
    for (let i = 0; i < veiculos.length; i++) {
        document.getElementById("tabela_corpo").innerHTML = ` 
        <tr>
        <td> ${numeroDeVagas[i]} </td> <td> ${veiculos[i]} </td>
        `
        i++
    }
}

function fnLimpar() {

}

