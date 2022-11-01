import {carritosDao} from '../../daos/carritos/index.js'

const postProductToCart = async (req, res) => {
    const ID = req.params.id;
    const ID_PRODUCT = req.body.id_prod;
    const newCart = await carritosDao.addToCart(ID, ID_PRODUCT);
    if (newCart === true)
      res.json({ status: `200 OK`, desc: `Producto añandido exitosamente a su carrito.` });
    else {
      res.json({ error: '404 Not Found', desc: newCart });
    }
  };

  export default postProductToCart