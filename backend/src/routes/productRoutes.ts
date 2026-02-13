import Router from 'express';
import { createProductController } from '../controller/createProductsController.js';

const productRoutes = Router();
productRoutes.post('/craete',  createProductController);
productRoutes.post('/update:id', )
productRoutes.delete('/delte:id')
  