export default class Subject {
  constructor(private _name: string) {
    this.validateName(this._name);
    this.name = _name;
  }

  get name(): string {
    return this._name;
  };

  private validateName(name: string) {
    if(name.length < 3) throw new Error('A diciplina deve ter no minimo 3 caracters');
  }

  set name(newName: string) {
    this.validateName(newName);
    this._name = newName;
  }
}