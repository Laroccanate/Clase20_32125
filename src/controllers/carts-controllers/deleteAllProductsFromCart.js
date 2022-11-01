import {carritosDao} from '../../daos/carritos/index.js'

const deleteAllProductsFromCart = async (req, res) => {
    const ID = req.params.id;
    try {
      const emptyCart = await carritosDao.emptyCart(ID);
      emptyCart === true
        ? res.json({ status: `200 OK`, desc: `Carrito vaciado exitosamente` })
        : res.json({ error: `404 Not Found`, desc: emptyCart });
    } catch (error) {
      console.error(error);
    }
  };

  export default deleteAllProductsFromCart