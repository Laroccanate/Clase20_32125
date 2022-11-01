import express from 'express';

import { productsApi, cartsApi } from './src/routes/index.js';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/productos', productsApi);
app.use('/api/carritos', cartsApi);
app.get('/', (req, res) => {
  res.redirect('/api/productos');
});
app.all('*', (req, res) => {
  res.json({ error: `404 Not Found`, desc: `Ups! No encontamos la pagina que buscas ='(` });
});