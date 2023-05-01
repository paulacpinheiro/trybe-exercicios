let custoProduto = 1;
let valorDeVenda = 10;

if (custoProduto >= 0 && valorDeVenda >= 0) {
  let custoTotalProduto = custoProduto * 1.2;
  let lucro = (valorDeVenda - custoTotalProduto) * 1000;
  console.log(lucro);
} else {
  console.log("Error, valores não podem ser negativos!");
};
