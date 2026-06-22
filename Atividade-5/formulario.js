
function cracharvirtual(){
    window.alert("Seu formulario foi enviado ")
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value
    let cargo = document.getElementById("cargo").value
    let departamento = document.getElementById("departamento").value
    let boolean = document.getElementById("boolean").value

    if (boolean == "sim") {
        boolean = true
    } else {
        boolean = false
    }

    console.log("Seu nome é: ",nome)
    console.log("Sua idade: ",idade )
    console.log("Seu Cargo: ",cargo)
    console.log("Seu departamento: ", departamento)
    console.log("seu acesso: ",boolean)
 
    alert(
        "Funcionario Cadastrado  \n \n Nome do funcionario:  "+ nome +  
        " \n idade funcionario: "+ idade + 
        "\n Cargo funcionario : "+ cargo +  
        "\n Departamento funcionario: "+ departamento +
        "\n Acesso funcionario: "+ boolean
    )


}

