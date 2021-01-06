import { Router } from 'express';

import archiveRouter from '@modules/archive/infra/http/routes/archive.routes';

const routes = Router();

routes.use('/archive', archiveRouter);

export default routes;
