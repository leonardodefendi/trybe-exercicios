import {Instrument, Flute, Drums} from './Flute';

export default class Musician {
  constructor(public name: string, public instrument: Instrument = new Flute('Minha flauta')) {
    
  }
  play(): void {
    this.instrument.play();
    console.log(`${this.name} é quem está comandando as melodias`);
  };
};
const flute = new Flute('Flauta braba');
const drums = new Drums('Bateria Pocante');
const musico = new Musician('Leonardo', flute);
const musico2 = new Musician('Cleber', drums);

musico.play();
musico2.play();