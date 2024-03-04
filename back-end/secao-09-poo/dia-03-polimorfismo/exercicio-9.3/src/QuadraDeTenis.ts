import Quadra from "./Quadra";
import IAgenda from "./interfaces/IAgenda";
import ITenis from "./interfaces/ITenis";
import normas from "./normasDeUso";

class QuadraDeTenis extends Quadra {
  public tenisData: ITenis = normas.tenis;
   public reservar<ITenis>(data: Date): IAgenda<ITenis> {
    const protocolo = (Math.random() + 1).toString(30).substring(3);
    const newReserve = {
      protocolo,
      data,
      regras: this.tenisData as ITenis,
    }
    return newReserve;
  }
}

export default QuadraDeTenis;