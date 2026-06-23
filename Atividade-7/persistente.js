function salvarNome(){
    let valordigitado = document.getElementById("nome-dados").value;
    let idadedigitado = document.getElementById("idade-dados").value;
    let cpfdigitado = document.getElementById("cpf-dados").value;
    let objetonome = {
        nome: valordigitado,
        idade: idadedigitado,
        cpf: cpfdigitado
    };

    let textoJSON = JSON.stringify (objetonome)
    localStorage.setItem("Dados Pessoas", textoJSON)

}

function Apagartudo(){
    localStorage.clear()

}