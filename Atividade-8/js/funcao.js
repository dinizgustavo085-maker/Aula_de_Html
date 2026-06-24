
function soma(){
    let num1soma = document.getElementById("primeiro-numero").value
    let num2soma = document.getElementById("segundo-numero").value
    
    let resultadosoma = Number (num1soma) + Number (num2soma);

    document.getElementById("resultado").innerText = resultadosoma  

    Salvar_Historico_soma(num1soma, num2soma, resultadosoma)
}

function Salvar_Historico_soma(num1soma, num2soma, resultadosoma){
 // Historico de soma em JSON para LocalStorage //
    let historicosoma = {
        num1:"Historico numero 1: " + num1soma,
        num2: "Historico numero 2: " +  num2soma,
        resultado: "Historico resultado: " + resultadosoma
    };
    console.log("Historico da soma:", historicosoma);

    let JSONhistoricosoma = JSON.stringify(historicosoma);
    localStorage.setItem("Historico da soma", JSONhistoricosoma);

}

function subtracao(){
    let num1sub = document.getElementById("primeiro-numero-subtracao").value
    let num2sub = document.getElementById("segundo-numero-subtracao").value

    let resultadosub = (Number (num1sub ) - (num2sub));

    document.getElementById("resultado").innerText = resultadosub

    historico_subtracao(num1sub, num2sub, resultadosub)

}

function historico_subtracao(num1sub, num2sub, resultadosub){

    let historicosub = {
        num1: "Historico numero 1: " + num1sub,
        num2: "Historico numero 2: " + num2sub, 
        resultado: "Historico resultado: " + resultadosub
    };
    console.log("Historico da subtracao: ", historicosub);
    
    let JSONhistoricosub = JSON.stringify(historicosub);
    localStorage.setItem("Historico da subtracao", JSONhistoricosub);

}

function divisao(){
    let num1div = document.getElementById("primeiro-numero-divisao").value
    let num2div = document.getElementById("segundo-numero-divisao").value

    let resultadodiv = (Number(num1div) / (num2div));
    document.getElementById("resultado").innerText = resultadodiv

    historico_divisao(num1div, num2div, resultadodiv)

}
 
function historico_divisao(num1div, num2div, resultadodiv){
    let historicodiv = {
        num1:"Historico numero 1: " + num1div,
        num2: "Historico numero 2: " + num2div,
        resultado: "Historico resultado: " + resultadodiv
    };
    console.log("Historico da divisao: ", historicodiv);

    let JSONhistoricodiv = JSON.stringify(historicodiv);
    localStorage.setItem("Historico da divisao", JSONhistoricodiv);
}

function multiplicacao(){
    let num1mult = document.getElementById("primeiro-numero-multiplicacao").value
    let num2mult = document.getElementById("segundo-numero-multiplicacao").value
    let resultadomult = (Number(num1mult) * (num2mult));
    document.getElementById("resultado").innerText = resultadomult

    historico_multiplicacao(num1mult, num2mult, resultadomult)
}

function historico_multiplicacao(num1mult, num2mult, resultadomult){
    let historicomult = {
        num1:"Historico numero 1: " + num1mult,
        num2: "Historico numero 2: " + num2mult,
        resultado: "Historico resultado: " + resultadomult
    };
    console.log("Historico da multiplicacao: ", historicomult);

    let JSONhistoricomult = JSON.stringify(historicomult);
    localStorage.setItem("Historico da multiplicacao", JSONhistoricomult);
}