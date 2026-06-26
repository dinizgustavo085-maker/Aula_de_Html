
function soma(){
    let num1 = document.getElementById("primeiro-numero").value
    let num2 = document.getElementById("segundo-numero").value
    
    let resultado = Number (num1) + Number (num2);

    document.getElementById("resultado").innerText = resultado  

    Salvar_Historico(num1, num2, resultado)
}


function subtracao(){
    let num1 = document.getElementById("primeiro-numero").value
    let num2 = document.getElementById("segundo-numero").value

    let resultado = (Number (num1 ) - (num2));

    document.getElementById("resultado").innerText = resultado

    Salvar_Historico(num1, num2, resultado)

}


function divisao(){
    let num1 = document.getElementById("primeiro-numero").value
    let num2 = document.getElementById("segundo-numero").value

    let resultado = (Number(num1) / (num2));

    document.getElementById("resultado").innerText = resultado

    Salvar_Historico(num1, num2, resultado)

}
 

function multiplicacao(){
    let num1 = document.getElementById("primeiro-numero").value
    let num2 = document.getElementById("segundo-numero").value
    let resultado = (Number(num1) * (num2));
    document.getElementById("resultado").innerText = resultado

    Salvar_Historico(num1, num2, resultado)
}

function Salvar_Historico(num1, num2, resultado){
    let historico = {
        num1:"Historico numero 1: " + num1,
        num2: "Historico numero 2: " +  num2,
        resultado: "Historico resultado: " + resultado 
    };

    console.log("Historico:", historico );

    let JSONhistorico = JSON.parse(localStorage.getItem(historico)) || [];
    JSONhistorico.push(historico);

    localStorage.setItem("Historico da soma", JSON.stringify(JSONhistorico));

}

function Imposoto(num1, taxa20, taxa90, resultado){
    let imposto = {
    num1: "Valor: " + num1,
    resultado: "Resultado do imposto: "+ resultado 
    };

    console.log("Imposto: ", imposto);

    let JSONimposto = JSON.parse(localStorage.getItem("Imposto")) || [];
    JSONimposto.push(imposto);
    localStorage.setItem("Imposto", JSON.stringify(JSONimposto));
}

function Calculoimposto(){
    let num1 = parseFloat(document.getElementById("Calculo").value)
    let taxa20 = 1.2
    let taxa90 = 1.9
    let resultado =  document.getElementById("resultado").value

    if (num1 <= 50){
        resultado = num1 * taxa20;
    }else{
       resultado = (num1 * taxa20)* taxa90; ;
    }

    document.getElementById("resultado").innerText = resultado
    Imposoto(num1, taxa20, taxa90, resultado)

}

function apagar_historico(){
    let confirmarapgar = window.confirm("Você deseja apagar o seu historico ")
    if (confirmarapgar){
        localStorage.clear()
    }
}
