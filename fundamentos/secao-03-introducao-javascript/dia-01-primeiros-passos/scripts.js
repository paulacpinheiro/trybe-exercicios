let situacao = "aprovada";

switch (situacao) {
    case "aprovada":
        console.log("Parabéns, você está no grupo de pessoas!");
        break;
    case "lista":
        console.log("VOcê está na lista de espera");
        break;
    case "reprovada":
        console.log("Infelizmente, você reprovou");
        break;
    default:
        console.log("Informação incorreta");

}