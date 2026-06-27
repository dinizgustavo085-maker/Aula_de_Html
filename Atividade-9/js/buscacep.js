function buscarcep() {
    let cepdigitado = document.getElementById("cep").value;

    if (cepdigitado === "") {
        return;
    }
    fetch(`https://viacep.com.br/ws/${cepdigitado}/json/`)
        .then(function (resposta) {
            return resposta.json();

        })
        .then(function (dados) {
            if (dados.erro) {
                alert("Cep não encontrado")
                return;
            }
            document.getElementById("rua").value = dados.logradouro;
            document.getElementById("bairro").value = dados.bairro;
            document.getElementById("cidade").value = dados.localidade;
            document.getElementById("estado").value = dados.uf;
        })




}
const campoCep = document.getElementById("cep");
campoCep.addEventListener('focusout', buscarcep);