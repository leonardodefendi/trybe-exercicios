import fs from 'fs/promises';
import path from 'path';
import { IModel } from './modelInterface';
import { IPlantsMetadata, IPlant } from '../services/interfaces';

class PlantsModel implements IModel<IPlant> {
  private readonly plantsFile = path.join(__dirname, 'database', 'plantsData.json');

  private readonly plantsMetadataFile = path.join(__dirname, 'database', 'plantsMetadata.json');

  private async getNextPlantId(incrementAmount = 1): Promise<number> {
    const dataRaw = await fs.readFile(this.plantsMetadataFile, { encoding: 'utf8' });
    const plantsMetadata: IPlantsMetadata = JSON.parse(dataRaw);
    plantsMetadata.lastPlantId += incrementAmount;

    await fs.writeFile(this.plantsMetadataFile, JSON.stringify(plantsMetadata, null, 2));

    return plantsMetadata.lastPlantId;
  }

  public async getAll(): Promise<IPlant[]> {
    const dataRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
    const allPlants: IPlant[] = JSON.parse(dataRaw);
    return allPlants;
  }

  public async getById(id: string): Promise<IPlant | null> {
    const dataRaw = await fs.readFile(this.plantsFile, { encoding: 'utf-8' });
    const allPlants: IPlant[] = JSON.parse(dataRaw);
    const [filtred] = allPlants.filter((plant) => plant.id === Number(id));
    if (!filtred) return null;
    return filtred;
  }

  public async create(arg: Omit<IPlant, 'id'>): Promise<IPlant> {
    const dataRaw = await fs.readFile(this.plantsFile, { encoding: 'utf-8' });
    const metadados = await this.getNextPlantId();
    const allPlants: IPlant[] = JSON.parse(dataRaw);
    const newPlant = { id: metadados, ...arg };
    allPlants.push(newPlant);
    await fs.writeFile(this.plantsFile, JSON.stringify(allPlants, null, 2));
    return newPlant;
  }

  async removeById(id: string): Promise<boolean> {
    const dataRaw = await this.getAll();
    const deleted = dataRaw.find((plants) => Number(id) === plants.id);
    if (!deleted) return false;
    const filtred = dataRaw.filter((plants) => Number(id) !== plants.id);
    await fs.writeFile(this.plantsFile, JSON.stringify(filtred, null, 2));
    return true;
  }

  async update(arg: IPlant): Promise<IPlant> {
    const allPlants = await this.getAll();
    const update = allPlants.map((plants) => {
      if (plants.id === arg.id) return arg;
      return plants;
    });
    await fs.writeFile(this.plantsFile, JSON.stringify(update));
    return arg;
  }
}

export default PlantsModel;
