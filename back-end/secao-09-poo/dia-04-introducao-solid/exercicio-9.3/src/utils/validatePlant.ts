import { INewPlant } from '../services/interfaces';

export default class PlantValidate {
  private static validateBreed(breed: string): void {
    if (typeof breed !== 'string') {
      throw new Error('Attribute "breed" must be string.');
    }
  }

  private static validateNeedsSun(needsSun: boolean): void {
    if (typeof needsSun !== 'boolean') {
      throw new Error('Attribute "needsSun" must be boolean.');
    }
  }

  private static validateOrigin(origin: string): void {
    if (typeof origin !== 'string') {
      throw new Error('Attribute "origin" must be string.');
    }
  }

  private static validateSize(size: number): void {
    if (typeof size !== 'number') {
      throw new Error('Attribute "size" must be number.');
    }
  }

  public static validateAttributes(plant: INewPlant): void {
    PlantValidate.validateBreed(plant.breed);
    PlantValidate.validateNeedsSun(plant.needsSun);
    PlantValidate.validateOrigin(plant.origin);
    PlantValidate.validateSize(plant.size);
  }
}
