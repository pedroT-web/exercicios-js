function fnCalcular(){
    let n1 = 0, n2 = 0, resultado = 0
    n1 = parseFloat(document.getElementById('inputNum1').value);
    n2 = parseFloat(document.getElementById('inputNum2').value);

    console.log(n1)
    if (document.getElementById("adicao").checked==true){
        resultado = n1 + n2
    }
     if(document.getElementById("subtracao").checked==true){
        resultado = n1 - n2
    } 
    if(document.getElementById("divisao").checked==true){
        resultado = n1 / n2
    } 
    if(document.getElementById("multiplicacao").checked==true){
        resultado = n1 * n2
    }

    document.getElementById("resultado").innerHTML = resultado
    
}