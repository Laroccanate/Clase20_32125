import Router from 'express';
import * as productsController from '../../controllers/products-controllers/index.js';
export const productsApi = new Router();

productsApi.get('/', productsController.getAllProducts);
productsApi.get('/:id', productsController.getProductById);
productsApi.post('/', productsController.postNewProduct);
productsApi.put('/:id', productsController.updateProduct);
productsApi.delete('/:id', productsController.deleteProductById);