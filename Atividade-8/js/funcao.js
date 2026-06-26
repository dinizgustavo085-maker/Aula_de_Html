
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

function Calculoimposto(){
    let num1 = document.getElementById("Calculo").value
    let resultado =  document.getElementById("resultado").value

    if (num1 <= 50){
        resultado = num1 + (num1 * 0.2);
    }else{
       let valor20 = num1 + (num1 * 0.2);
       resultado = num1 + (valor20 * 0.9)
    }

    console.log("Resultado:", resultado)

    


}

function apagar_historico(){
    let confirmarapgar = window.confirm("Você deseja apagar o seu historico ")
    if (confirmarapgar){
        localStorage.clear()
    }
}
