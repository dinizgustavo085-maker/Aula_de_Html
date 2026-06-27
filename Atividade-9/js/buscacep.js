function buscarcep() {
    let cepdigitado = document.getElementById("cep").value;

    if (cepdigitado === "") {
        return;
    }

    cepdigitado = cepdigitado.replace(/\D/g, ""); // remove o hífen digitado ("mas não executou certo kkkkkk")

    fetch(`https://viacep.com.br/ws/${cepdigitado}/json/`)
        .then(function (resposta) {
            return resposta.json();

        })
        .then(function (dados) {
            if (dados.erro) {
                alert("Cep não encontrado, tente novamente !");
                return;
            }
            document.getElementById("rua").value = dados.logradouro;
            document.getElementById("bairro").value = dados.bairro;
            document.getElementById("cidade").value = dados.localidade;
            document.getElementById("estado").value = dados.uf;
        })


window.alert("Dados estão certos " + cepdigitado); // exebi a mensagem antes que valide o cep digitado

}
const campoCep = document.getElementById("cep");
campoCep.addEventListener('focusout', buscarcep);