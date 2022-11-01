import { productosDao } from '../../daos/productos/index.js';
const getProductById = async (req, res) => {
    try {
      const item = await productosDao.getById(req.params.id);
      item ? res.json(item) : res.json({ error: `404 Not Found`, desc: `Ups! No encontramos la producto que buscas...` });
    } catch (err) {
      console.error(err);
    }
  };

  export default getProductById; 