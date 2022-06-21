import express from 'express';
import {
  getController,
  getFromIdController,
  patchController,
  postController,
} from '../controllers/TIK-controller.js';

export const thingsRouter = express.Router();

thingsRouter.get('/', getController);
thingsRouter.get('/:id', getFromIdController);
thingsRouter.post('/', postController);
thingsRouter.patch('/:id', patchController);
