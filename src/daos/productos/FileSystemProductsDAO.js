import FileSystemContainer from "../../containers/fileSystemContainer.js";

export default class FileSystemProductsDAO extends FileSystemContainer {
  constructor(ruta, rutaProductos) {
    super(`${ruta}/products.json`);
  }
}