
function soma(){
    let num1 = document.getElementById("primeiro-numero").value
    let num2 = document.getElementById("segundo-numero").value
    
    let resultado = Number (num1) + Number (num2);

    document.getElementById("resultado").innerText = resultado

    salvarsoma(num1, num2, resultado)
}


function salvarsoma(num1, num2, resultado){

    console.log("Historico num 1:  "+ num1)
    console.log("Historico num 2:  "+ num2)
    console.log("Historico resultado:  "+ resultado)

}