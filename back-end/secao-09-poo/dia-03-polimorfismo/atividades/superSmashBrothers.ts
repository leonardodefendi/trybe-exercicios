abstract class Character {
  abstract talk(): void;
  abstract speciealMove(): void;
  static apresentation(character: Character) {
    character.talk();
    character.speciealMove();
  }
}

class MeleeCharacter extends Character {
  constructor(public name:string, public specialMoveName: string) {super()}
  talk(): void {
    console.log(`Olá, me chamo ${this.name}`)
  }
  speciealMove(): void {
    console.log(`Meu movimento especial ${this.specialMoveName}`)
  }
}

class LongRangeCharacter extends Character {
  constructor(public name:string, public specialMoveName: string) {super()}
  talk(): void {
    console.log(`Olá, me chamo ${this.name}`)
  }
  speciealMove(): void {
    console.log(`Meu movimento especial ${this.specialMoveName} `)
  }
}

const melee = new MeleeCharacter('Yoshi', 'Super Dragon');
const range = new LongRangeCharacter('Sumus', 'Zero Laser');

Character.apresentation(melee);
Character.apresentation(range);