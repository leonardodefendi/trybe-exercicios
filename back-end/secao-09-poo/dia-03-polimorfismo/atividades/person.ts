interface Person {
  id: number;
  name: string;
  showIdentification(): void;
}

class PhysicalPerson implements Person {
  private static lastId = 0;
  private _name: string;
  private _id: number;
  private _cpf: string;
  constructor(name: string, cpf: string) {
    this._name = name;
    this._cpf = cpf;
    this._id = PhysicalPerson.newId();
  };

  private static newId() {return this.lastId ++};
  get id() {return this._id};
  get name() {return this._name};
  get cpf() {return this._cpf};

  showIdentification(): void {
      console.log(this.id, this.cpf);
  };
};

class LegalPerson implements Person {
  private static lastId = 0;
  private _name: string;
  private _id: number;
  private _cnpj: string;
  constructor(name: string, cnpj: string) {
    this._name = name;
    this._cnpj = cnpj;
    this._id = LegalPerson.newId();
  };

  private static newId() {return this.lastId ++};
  get id() {return this._id};
  get name() {return this._name};
  get cpf() {return this._cnpj};

  showIdentification(): void {
      console.log(this.id, this._cnpj);
  };
}

class Contract<T> {
  static _number = 0;
  constructor(public broker: T){};
  static get number() {return this._number};
};

const pp0 = new PhysicalPerson('John', '123456789');
const pp1 = new PhysicalPerson('Jenny', '987654321');
const lp = new LegalPerson('International Sales SA', '834729384723');

const c1 = new Contract(pp0);
console.log(c1.broker.cpf);

pp0.showIdentification();
pp1.showIdentification();
lp.showIdentification();