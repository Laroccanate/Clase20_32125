import {carritosDao} from '../../daos/carritos/index.js';

const getProductsFromCart = async (req, res) => {
    const ID = req.params.id;
    try {
      const cartProducts = await carritosDao.getCartProducts(ID);
      cartProducts
        ? res.json(cartProducts)
        : res.json({ error: `404 Not Found`, desc: `Ups! No encontramos el carrito :O` });
    } catch (error) {
      console.error(error);
    }
  };

  export default getProductsFromCart