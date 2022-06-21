import express from 'express';
import { getController } from '../controllers/TIK-controller.js';

export const thingsRouter = express.Router();

// let things: Array<iThing> = []
thingsRouter.get('/', getController);
