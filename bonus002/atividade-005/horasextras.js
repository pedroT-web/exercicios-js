function fnHorasExtras(Salario, horasTrabalhadas, cargaHoraria) {
    let horasExtras = 0
    if(Salario < 0){
        return 'todos os valores devem ser positivos'
    }
    
    

    if(horasTrabalhadas > cargaHoraria){
        horasExtras = (horasTrabalhadas - cargaHoraria) * Salario
        console.log(horasTrabalhadas , cargaHoraria, Salario, horasExtras)
    }

    return horasExtras
}