let saldo = 200;

function adicionaValor (valor) {
    return saldo + valor
}
function subtraiValor (valor) {
    return saldo - valor
}
function multiplicaValor (valor) {
    return saldo * valor
}
function divideValor (valor) {
    return saldo / valor
}

console.log(adicionaValor(100));
console.log (subtraiValor(55))
console.log(multiplicaValor(3));
console.log(divideValor(2));