export default class Person {
  constructor(public _name: string, private _birthDate: Date) {
    this.validateDate(this.birthDate);
    this.validateName(this.name);
  }

  get name() {
    return this._name;
  }
  get birthDate() {
    return this._birthDate
  }

  private validateName(name: string) {
    if(name.length < 3) {
      throw new Error('O nome precisa de pelo menos 3 caracteres');
    }
  }

  set name(newName: string) {
    this.validateName(newName);
    this._name = newName;
  }

  set birthDate(newBirthDate: Date) {
    this.validateDate(newBirthDate);
    this._birthDate = newBirthDate;
  };

  getAge(date: Date) {
    const diff = Math.abs(new Date().getTime() - date.getTime());
    const yearsMs = 31_536_000_000;
    return Math.floor(diff/yearsMs);
  }

  private validateDate(date: Date) {
    if(date.getTime() > new Date().getTime()){
      throw new Error ('A da de nascimento não pode ser futura');
    }
    if(this.getAge(date) > 120) {
      throw new Error ('A pesso pode ter no máximo 120 anos');
    }
  }


}

const maria = new Person('Maria da Consolação', new Date('1980/01/25'));
const luiza = new Person('Luiza Andrade', new Date('2005/10/02'));
