import Quadra from "./Quadra";
import IAgenda from "./interfaces/IAgenda";
import IFutebol from "./interfaces/IFutebol";
import normas from "./normasDeUso";

class QuadraDeFutebol extends Quadra {
  public futebolData: IFutebol = normas.futebol;
  
  public reservar<IFutebol>(data: Date): IAgenda<IFutebol> {
    const protocolo  = (Math.random() + 1).toString(30).substring(3);
    return {
      protocolo,
      data,
      regras: this.futebolData as IFutebol,
    };
  };
;}

export default QuadraDeFutebol;