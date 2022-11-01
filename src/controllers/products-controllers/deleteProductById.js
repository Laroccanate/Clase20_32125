import { productosDao } from '../../daos/productos/index.js';
import config  from '../../../config.js'
const deleteProductById = async (req, res) => {
    if (config.isAdmin) {
      try {
        const isDeleted = await productosDao.deleteById(req.params.id);
        isDeleted ? res.json({ status: `200 OK`, desc: `Producto eliminado exitosamente` }) : res.json({ error: 404, desc: `Ups! No encontramos el producto que busca eliminar...` });
      } catch (error) {
        console.error(error);
      }
    } else {
      res.json({ error: `403 Forbidden`, desc: `DELETE reservado para admins` });
    }
  };

  export default deleteProductById;