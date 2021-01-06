import { Router } from 'express';
import ArchiveController from '@modules/archive/infra/controller/ArchiveController';


const archivesRouter = Router();
const archivesController = new ArchiveController();

archivesRouter.post('/', archivesController.read);

export default archivesRouter;
