document.getElementById('bt-calcular').addEventListener('click', function(){
    let salario = document.getElementById('salario').value
    let horastrabalhadas = parseFloat(document.getElementById('horas-trabalhadas').value)
    let cargahoraria = document.getElementById('carga-horaria').value
    let horasextras = fnHorasExtras(salario, horastrabalhadas, cargahoraria)
    document.getElementById('resposta').innerHTML = fnFormatarMonetario(horasextras)
})