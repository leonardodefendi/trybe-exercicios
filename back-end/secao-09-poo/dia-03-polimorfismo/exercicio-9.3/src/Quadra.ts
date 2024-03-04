import Clube from "./Clube";
import IAgenda from "./interfaces/IAgenda";

abstract class Quadra extends Clube {
  abstract reservar<T>(data: Date): IAgenda<T>;
}

export default Quadra;