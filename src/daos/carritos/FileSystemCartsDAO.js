import fs from 'fs'
import FileSystemContainer from "../../containers/fileSystemContainer.js";

export default class FileSystemCartsDAO extends FileSystemContainer{
   constructor(ruta){
       super(`${ruta}/carts.json`)
       this.rutaProductos = `${ruta}/products.json`
   }
   async getProducts(){
    const products = await fs.promises.readFile(this.rutaProductos, 'utf-8')
    return JSON.parse(products)
   }
   async addToCart(id, idProduct) {
    try {
      const allProducts = await this.getProducts()
      const carts = await this.getAll();
      const cart = await this.getById(id);
      const productToAdd = allProducts.find(prod=> prod.id === parseInt(idProduct))
      if (cart && productToAdd) {
        carts[cart.id - 1].productos.push(productToAdd);
        this.writeFile(carts);
        return true;
      } else if (!cart) {
        return 'Ups! No encontramos el carrito que buscas...';
      } else if (!productToAdd) {
        return 'Ups! No existe ese producto...';
      }
    } catch (error) {
      console.error(error);
    }
  }
}