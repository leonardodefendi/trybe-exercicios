// Flute.ts
export interface Instrument {
  name: string;
  play(): void;
}


export class Flute implements Instrument {
  /* Não se preocupe com problemas do eslint, estamos usando um exemplo didático */
  constructor(public name: string) { }
  public play(): void {
    console.log(`${this.name} está emitindo melodias`);
  }
}

export class Drums implements Instrument {
  constructor(public name: string) {}
  play(): void {
      console.log(`${this.name} é a bateria que esta fazendo barulho`)
  }
}

