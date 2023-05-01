let peca = "rei";

switch (peca.toLowerCase()) {
    case "peão":
        console.log("uma casa para frente, na primeira jogada pode andar duas");
        break;
    case "cavalo":
        console.log("duas casas para frente e uma casa para o lado esquerdo ou o lado direito");
        break;
    case "torre":
        console.log("movimento horizontal ou vertical");
        break;
    case "rei":
        console.log("uma casa em qualquer direção");
        break;
    case "rainha":
        console.log("diagonal, vertical e horizontal");
        break;
    case "bispo":
        console.log("diagonal");
        break;
    default:
        console.log("Erro.Peça inválida");
};