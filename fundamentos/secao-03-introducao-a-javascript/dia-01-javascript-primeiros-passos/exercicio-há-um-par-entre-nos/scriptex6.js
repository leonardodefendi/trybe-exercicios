let peca ="TORRE";

switch(peca.toLowerCase()){
  case "cavalo":
    console.log("Avance três casas a frente e uma para o lado")
    break;
  
  case "bispo":
    console.log("Pode mover quantas casas necessario na diagonal");
    break;
  
  case "peao":
    console.log("No inicio do jogo pode mover 2 casas a frente e após o incio, somente uma casa");
    break;
  
  case "torre":
    console.log("Em qualquer posiçao que seja me linha reta")
    break;

  case "rainha":
    console.log("Pode andar em qualquer posição sem restrição de casa");
    break;

  case "rei":
    console.log("Pode andar uma casa para qualquer direção")
    break;
  
  default :
    console.log("Peça não encontrada");
}