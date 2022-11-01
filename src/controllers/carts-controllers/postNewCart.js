import {carritosDao} from '../../daos/carritos/index.js'

const postNewCart = async (req, res) => {
    const newCartId = await carritosDao.addNewCart();
    res.json(`Carrito creado exitosamente con id: ${newCartId}`);
  };

  export default postNewCart