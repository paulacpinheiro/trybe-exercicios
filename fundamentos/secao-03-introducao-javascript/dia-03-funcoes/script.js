let clientesTrybeBank = ['Ada', 'John', 'Gus'];


/*function clientesNovos(cliente) {
    if (typeof cliente === 'string') {
        clientesTrybeBank.push(cliente)
        return "Cliente adicionado com sucesso!"
    } 
    else {
        return 'o tipo de parâmetro deve ser uma string'
    }
}
console.log(clientesNovos(true))
console.log(clientesNovos('Filó'))
console.log(clientesTrybeBank);*/

function eliminaCliente(cliente) {
    let clienteEncontrado = false;
    if (typeof cliente === 'string') {
        for (let index = 0; index < clientesTrybeBank; index += 1) {
            if (cliente === clientesTrybeBank[index]) {
                clientesTrybeBank.splice(index, 1);
                clienteEncontrado = true;
                return "Cliente excluído com sucesso!";
            }


        }
        if (clienteEncontrado = false);
        return "Cliente não encontrado!"

    } else {
        return "O tipo de parâmetro deve ser uma string"
    }
}



console.log(eliminaCliente(false))
console.log(eliminaCliente('Maria'))
console.log(eliminaCliente('Gus'))
console.log(clientesTrybeBank)
