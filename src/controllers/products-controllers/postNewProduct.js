import { productosDao } from '../../daos/productos/index.js';
import config  from '../../../config.js'

const postNewProduct = async (req, res) => {
    const NOMBRE = req.body.nombre;
    const DESCRIPTION = req.body.descripcion;
    const URL_IMG = req.body.foto;
    const PRICE = req.body.precio;
    if (config.isAdmin) {
      try {
        productosDao.save(NOMBRE, DESCRIPTION, URL_IMG, PRICE);
        res.json({ status: `200 OK`, desc: `Producto creado exitosamente =)` });
      } catch (err) {
        console.error(err);
      }
    } else {
      res.json({ error: `403 Forbidden`, desc: `POST reservado para admins` });
    }
  };

  export default postNewProduct;