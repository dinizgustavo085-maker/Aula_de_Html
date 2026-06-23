function cadastrofuncionario(){
    let nome = document.getElementById("nome-funcionario").value;
    let hora = document.getElementById("horas-funcionario").value;
    let cargo = document.getElementById("cargo-funcionario").value;


    if (nome.trim() === "" || cargo.trim()  === "" ){
        alert("Por favor, coloque alguma informação");
        return;
    }

    console.log("Cadastando", nome, hora, cargo)
    let objeto = {
        nomefuncionario: nome,
        horafuncionario: hora,
        cargofuncionario: cargo
    };

    let textoJSON = JSON.stringify(objeto)
    localStorage.setItem("dadosfuncionario", textoJSON)

    let sessaoLista = document.getElementById("lista-funcionarios");
    let cardFuncionario = document.createElement("div");

    cardFuncionario.style.border = "1px solid #ccc";
    cardFuncionario.style.padding = "10px";
    cardFuncionario.style.margin = "10px 0";
    cardFuncionario.style.borderRadius = "5px";

    cardFuncionario.innerHTML =
        "<p><strong>Nome:</strong> " + nome + "</p>" +
        "<p><strong>Cargo:</strong> " + cargo + "</p>" +
        "<p><strong>Carga Horária:</strong> " + hora + "h semanais</p>";

    sessaoLista.appendChild(cardFuncionario);


    document.getElementById(nome).value = "";
    document.getElementById(cargo).value = "";
    document.getElementById(hora).selectedIndex = 0;
}