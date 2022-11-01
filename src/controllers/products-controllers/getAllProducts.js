import { productosDao } from '../../daos/productos/index.js';

const getAllProducts = async (req, res, next) => {
    try {
      const data = await productosDao.getAll();
      res.json(data);
    } catch (err) {
      console.error(err);
    }
  };

  export default getAllProducts;