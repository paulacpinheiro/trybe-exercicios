let clientesTrybeBank = ['Ada', 'John', 'Gus'];


function validaParametro(cliente) {
    if (typeof cliente === 'string') {
        return true;
    } else {
        return 'Parâmetro deve ser uma string';
    }

}

function clienteIndex(cliente) {
    for (let index = 0; index < clientesTrybeBank.length; index += 1) {
        if (cliente === clientesTrybeBank[index]) {
            return index;
        }
    }
    return false;
}

function removeCliente(cliente) {
    let valida = validaParametro(cliente);
    if (valida !== true) {
        return valida;

    }
    let index = clienteIndex(cliente);
    if (index === false) {
        return 'cliente não encontrado!';
    }
    clientesTrybeBank.slice(index, 1);
    return 'Cliente excluído com sucesso!';
}

console.log(removeCliente(false));
console.log(removeCliente('Carlos'));
console.log(removeCliente('Jhon'));
console.log(clientesTrybeBank);
 
