function tratamentodeerro(){
    try {

        // estamos executando uma função
        console.log("iniciando meu bloco try")
        // declaramos uma função
        funcaonaodefinida()

        console.log("Essa linha deve ser executada")
    } catch (error) {
        console.error("Erro encontrado",  error.message)
    }
}

function tratamentodeerroggerenerico(){
    try {
        let idade = -10

        if (idade < 0){ 
            throw new Error("Não pode ter uma idade menor que 0");
        }else  {
             throw new Error("Não pode ter uma idade menor que 18");
        }
    } catch (error) {
        console.log("erro ao cadastrar", error.message)
    }
}