import Clube from "./Clube";
import QuadraDeFutebol from "./QuadraFutebol";
import QuadraDeTenis from "./QuadraDeTenis";

const defendiClube = new Clube();
const quadraFut = new QuadraDeFutebol();
const quadraFut2 = new QuadraDeFutebol();
const quadraTenis = new QuadraDeTenis();
const quadraTenis2 = new QuadraDeTenis();

defendiClube.adicionarQuadra(quadraFut);
defendiClube.adicionarQuadra(quadraFut2);
defendiClube.adicionarQuadra(quadraTenis);
defendiClube.adicionarQuadra(quadraTenis2);
const quadraReservada = defendiClube.buscarQuadra<QuadraDeFutebol>(defendiClube.getQuadras.length -1).reservar(new Date('2024-01-25'));
const novaReserva = defendiClube.buscarQuadra<QuadraDeFutebol>(0).reservar(new Date('2024-04-23'));
const reservaTenis = defendiClube.buscarQuadra<QuadraDeTenis>(defendiClube.getQuadras.length -1).reservar(new Date('2024-02-3'));
console.log(defendiClube.getQuadras);
console.log(reservaTenis);
