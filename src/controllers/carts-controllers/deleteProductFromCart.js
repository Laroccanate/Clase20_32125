import {carritosDao} from '../../daos/carritos/index.js'

const deleteProductFromCart = async (req, res) => {
  const ID = req.params.id;
  const ID_PRODUCT = req.params.id_prod;

  try {
    const cartProducts = await carritosDao.deleteProductFromCart(ID, ID_PRODUCT);
    cartProducts === true
      ? res.json({ status: `200 OK`, desc: `Producto elminado exitosamente` })
      : res.json({ error: `404 Not Found`, desc: cartProducts });
  } catch (error) {
    console.error(error);
  }
};

export default deleteProductFromCart