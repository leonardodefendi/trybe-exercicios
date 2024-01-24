import { Router } from 'express';
import PlantController from '../controllers/PlantController';
import PlantsModel from '../models/plants.model';
import PlantService from '../services/PlantService';

const plantModel = new PlantsModel();
const plantService = new PlantService(plantModel);
const plantController = new PlantController(plantService);

const plantRouter = Router();

plantRouter.get('/', (req, res, next) => plantController.getAll(req, res, next));
plantRouter.post('/', (req, res, next) => plantController.create(req, res, next));
plantRouter.get('/:id', (req, res, _next) => plantController.getById(req, res));
plantRouter.delete('/:id', (req, res) => plantController.remove(req, res));

export default plantRouter;
