import { productosDao } from '../../daos/productos/index.js';
import config  from '../../../config.js'

const updateProduct = async (req, res) => {
    const ID = req.params.id;
    const NOMBRE = req.body.nombre;
    const DESCRIPTION = req.body.descripcion;
    const URL_IMG = req.body.foto;
    const PRICE = req.body.precio;
    const STOCK = req.body.stock;
  
    if (config.isAdmin) {
      try {
        const update = await productosDao.updateProduct(ID, NOMBRE, DESCRIPTION, URL_IMG, PRICE, STOCK);
        update ? res.json({ status: `200 OK`, desc: `Producto modificado exitosamente =)` }) : res.json({ error: `404 Not Found`, desc: `Ups! No encontramos el producto a modificar =O` });
      } catch (err) {
        console.error(err);
      }
    } else {
      res.json({ error: `403 Forbidden`, desc: `PUT reservado para admins` });
    }
  };

  export default updateProduct;