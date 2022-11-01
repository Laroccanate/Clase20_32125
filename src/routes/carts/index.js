import Router from 'express';

import * as cartsControllers from '../../controllers/carts-controllers/index.js';

export const cartsApi = new Router();

cartsApi.post('/', cartsControllers.postNewCart);
cartsApi.post('/:id/productos', cartsControllers.postProductToCart);
cartsApi.get('/:id/productos', cartsControllers.getProductsFromCart);
cartsApi.delete('/:id/productos/:id_prod', cartsControllers.deleteProductFromCart);
cartsApi.delete('/:id', cartsControllers.deleteAllProductsFromCart);