import { IModel } from '../models/modelInterface';
import PlantValidate from '../utils/validatePlant';
import { INewPlant, IPlant, IService } from './interfaces';

class PlantService implements IService<IPlant, INewPlant> {
  constructor(private model: IModel<IPlant>) {}

  static waterFrequency(needsSun: boolean, size: number, origin: string): number {
    const waterFrequency = needsSun
      ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
      : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);
    return waterFrequency;
  }

  public async getAll(): Promise<IPlant[]> {
    const allPlants = await this.model.getAll();
    return allPlants;
  }

  public async getById(id: string): Promise<IPlant | null> {
    const allPlants = await this.model.getById(id);
    return allPlants;
  }

  async removeById(id: string): Promise<void> {
    const removed = await this.model.removeById(id);
    if (!removed) throw new Error('Planta não encontrada');
  }

  public async update(id: string, arg: Omit<IPlant, 'id'>): Promise<IPlant> {
    const exist = this.model.getById(id);
    if (!exist) throw new Error('Plant not exit');
    PlantValidate.validateAttributes(arg);
    const updated = {
      id: Number(id),
      ...arg,
      waterFrequency: PlantService.waterFrequency(arg.needsSun, arg.size, arg.origin),
    };
    await this.model.update(updated);
    return updated;
  }

  public async create(plant: INewPlant): Promise<IPlant> {
    const {
      needsSun,
      origin,
      size,
    } = plant;
    const waterFrequency = PlantService.waterFrequency(needsSun, size, origin);
    PlantValidate.validateAttributes(plant);
    const newPlant = await this.model.create({ ...plant, waterFrequency });
    return newPlant;
  }
}

export default PlantService;
