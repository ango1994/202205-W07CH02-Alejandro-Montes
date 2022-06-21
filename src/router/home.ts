import { Router } from 'express';

const homeRouter = Router();

homeRouter.get('/', (req, res) => {
  req;
  res.end('Cosas que conozco');
});

export default homeRouter;
