interface Character {
  name: string;
  specialMove: string;
};

interface DbCharacter extends Character {
  id: number;
};

interface IModel {
  create(character: Character): Promise<DbCharacter>;
  update(id: number, character: Character): Promise<DbCharacter>;
  delete(id: number): Promise<boolean>;
  getAll(): Promise<DbCharacter[]>;
  getById(id: number): Promise<DbCharacter>;
};

const db: DbCharacter[] = [];

class LocalDbModel implements IModel {
  async create(character: Character): Promise<DbCharacter> {
    const lastId = db.length > 0 ? db[db.length -1].id : 0;
    const newCharacter = {id: lastId + 1, ...character};
    db.push(newCharacter)
    return newCharacter;
  }

  async update(id: number, character: Character): Promise<DbCharacter> {
    try {
      const findIndex = db.findIndex((personagem) => Number(personagem.id) === id );
      db[findIndex] = {...db[findIndex], ...character};
      return db[findIndex];
    } catch (error) {
      throw new Error('Character not found')
    }
  }
  async delete(id: number): Promise<boolean> {
    try {
      const findIndex = db.findIndex((personagem) => Number(personagem.id) === id );
      const deletedItem = db.slice(findIndex, 1);
      if(deletedItem.length > 0) return true;
      return false
    } catch (error) {
      throw new Error('Character not found');
    }
  }
  async getAll(): Promise<DbCharacter[]> {
    return db;
  }
  async getById(id: number): Promise<DbCharacter> {
    try {
      const findIndex = db.findIndex((personagem) => Number(personagem.id) === id );
      return db[findIndex]
    } catch (error) {
      throw new Error('Not found');
    }
  }
}

class CharacterService {
  constructor(readonly model: IModel) {}
  async create(character: Character) {
    const charaterNew = await this.model.create(character);
    return {status: 201, data: charaterNew};
  }
  async getAll() {
    const allCharacter = await this.model.getAll();
    return {status: 200, data: allCharacter};
  };
  async getById(id: number) {
    const findCharacter = await this.model.getById(id);
    return {status: 200, data: findCharacter};
  }

  async update(id: number, character: Character) {
    const update = await this.model.update(id, character);
    return {status: 200, data: update};
  }
  async delete(id: number){
    const deleted = await this.model.delete(id);
    return {status: 200, data: deleted};
  }
};

class MockDbModel implements IModel {
  async create(character: Character) {
    console.log('character created');
    return { id: 1, name: 'Peach', specialMove: 'Toad' };
  }

  async update(id: number, character: Character) {
    console.log('character updated');
    return { id: 1, name: 'Yoshi', specialMove: 'Egg Lay' };
  }

  async delete(id: number) {
    console.log('character deleted');
    return true;
  }

  async getAll() {
    return [
      { id: 1, name: 'Samus', specialMove: 'Charge Shot' },
      { id: 2, name: 'Kirby', specialMove: 'Inhale' },
    ];
  }

  async getById(id: number) {
    return { id: 1, name: 'Mario', specialMove: 'Fireball' };
  }
}

const A = new CharacterService(new LocalDbModel());
A.create({ name: 'Samus', specialMove: 'Charge Shot' })
A.create({ name: 'Teste', specialMove: 'Charge Shot' })
A.create({ name: 'Samus', specialMove: 'Charge Shot' })
// A.getAll().then(console.log)
A.getById(4).then(console.log)

// const B = new CharacterService(new MockDbModel());
// B.getAll().then(console.log);