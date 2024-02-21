import Quadra from './Quadra';
import IAgenda from './interfaces/IAgenda';
import IFutebol from './interfaces/IFutebol';
import ITenis from './interfaces/ITenis';

class Clube {
  private quadras: Quadra[] = [];

  public adicionarQuadra(quadra: Quadra) {
    this.quadras.push(quadra);
  }

  public buscarQuadra<T extends Quadra>(index: number): T {
    return this.quadras[index] as T;
  }

  get getQuadras() {
    return this.quadras;
  }
}

export default Clube;